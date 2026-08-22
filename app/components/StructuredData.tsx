const siteUrl = "https://www.getyour.design";

type ProductSchemaInput = {
  category: string;
  description: string;
  images?: { src: string; alt: string }[];
  maker: string;
  material: string;
  price: string;
  slug: string;
  title: string;
  url: string;
};

function JsonLd({ value }: { value: Record<string, unknown> }) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} type="application/ld+json" />;
}

export function SiteStructuredData() {
  return (
    <JsonLd value={{
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "GETYOUR.DESIGN", url: siteUrl, description: "Curated contemporary design, art, furniture, objects, lighting, rugs and editions." },
        { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "GETYOUR.DESIGN", url: siteUrl, publisher: { "@id": `${siteUrl}/#organization` } },
      ],
    }} />
  );
}

export function ProductStructuredData({ product }: { product: ProductSchemaInput }) {
  const isArtwork = product.category === "Kunst" || product.category === "Art";
  const imageUrls = product.images?.map((image) => `${siteUrl}${image.src}`);
  const numericPrice = product.price.match(/[\d.]+/)?.[0]?.replace(/\./g, "");
  const availableByRequest = /anfrage|request/i.test(product.price);

  return (
    <JsonLd value={{
      "@context": "https://schema.org",
      "@type": isArtwork ? "VisualArtwork" : "Product",
      name: product.title,
      description: product.description,
      url: `${siteUrl}${product.url}`,
      image: imageUrls,
      material: product.material,
      ...(isArtwork ? { creator: { "@type": "Person", name: product.maker } } : { brand: { "@type": "Brand", name: product.maker } }),
      sku: product.slug,
      ...(availableByRequest
        ? { offers: { "@type": "Offer", url: `${siteUrl}${product.url}`, priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability" } }
        : numericPrice
          ? { offers: { "@type": "Offer", url: `${siteUrl}${product.url}`, price: numericPrice, priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability" } }
          : {}),
    }} />
  );
}
