export type ProductFilterKey =
  | "brand"
  | "room"
  | "collection"
  | "category"
  | "material"
  | "style"
  | "country"
  | "availability";

export type ProductFilterSelection = Partial<Record<ProductFilterKey, string[]>>;

export type ProductFilterOption = {
  value: string;
  label: string;
  count: number;
};

export type ProductFilterDefinition = {
  key: ProductFilterKey;
  label: string;
  multiple: boolean;
  options: ProductFilterOption[];
};

type FilterableProduct = {
  brand?: string;
  brandSlug?: string;
  rooms?: string[];
  collections?: string[];
  categorySlug: string;
  material: string;
  style?: string[];
  country?: string;
  status: string;
};

const filterDefinitions: Array<{ key: ProductFilterKey; label: string }> = [
  { key: "category", label: "category" },
  { key: "brand", label: "brand" },
  { key: "room", label: "room" },
  { key: "collection", label: "collection" },
  { key: "material", label: "material" },
  { key: "style", label: "style" },
  { key: "country", label: "country" },
  { key: "availability", label: "availability" },
];

function compactValues(values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value));
}

export function getProductFilterValue(product: FilterableProduct, key: ProductFilterKey) {
  switch (key) {
    case "brand":
      return compactValues([product.brandSlug || product.brand]);
    case "room":
      return product.rooms ?? [];
    case "collection":
      return product.collections ?? [];
    case "category":
      return compactValues([product.categorySlug]);
    case "material":
      return compactValues([product.material]);
    case "style":
      return product.style ?? [];
    case "country":
      return compactValues([product.country]);
    case "availability":
      return compactValues([product.status]);
  }
}

export function getProductFilterOptions(products: FilterableProduct[], key: ProductFilterKey) {
  const counts = new Map<string, number>();

  products.forEach((product) => {
    getProductFilterValue(product, key).forEach((value) => {
      counts.set(value, (counts.get(value) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .map(([value, count]) => ({ value, label: value, count }))
    .sort((a, b) => a.value.localeCompare(b.value));
}

export function getProductFilterDefinitions(products: FilterableProduct[]) {
  return filterDefinitions.map(({ key, label }) => ({
    key,
    label,
    multiple: true,
    options: getProductFilterOptions(products, key),
  }));
}

export function createEmptyProductFilterSelection(): ProductFilterSelection {
  return {};
}

export function hasActiveProductFilters(selection: ProductFilterSelection) {
  return Object.values(selection).some((values) => Boolean(values?.length));
}

export function filterProducts<Product extends FilterableProduct>(
  products: Product[],
  selection: ProductFilterSelection,
) {
  if (!hasActiveProductFilters(selection)) {
    return products.slice();
  }

  return products.filter((product) =>
    filterDefinitions.every(({ key }) => {
      const selectedValues = selection[key];

      if (!selectedValues?.length) {
        return true;
      }

      const productValues = getProductFilterValue(product, key);

      return selectedValues.some((value) => productValues.includes(value));
    }),
  );
}
