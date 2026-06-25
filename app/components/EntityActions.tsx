"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getDictionary } from "../data/dictionaries";
import { getLocaleFromPath } from "../lib/i18n";

type EntityActionsProps = {
  id: string;
  title: string;
  type: "Produkt" | "Kunstwerk" | "Collectible Design" | "Atelier";
  href: string;
};

type SavedEntity = {
  id: string;
  title: string;
  type: EntityActionsProps["type"];
  href: string;
  savedAt: string;
};

type ShareCapableNavigator = Navigator & {
  clipboard?: {
    writeText: (text: string) => Promise<void>;
  };
  share?: (data: ShareData) => Promise<void>;
};

const storageKey = "getyour-design:saved-entities";

function readSavedEntities() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as SavedEntity[]) : [];
  } catch {
    return [];
  }
}

function writeSavedEntities(items: SavedEntity[]) {
  window.localStorage.setItem(storageKey, JSON.stringify(items));
}

export function EntityActions({ id, title, type, href }: EntityActionsProps) {
  const [isSaved, setIsSaved] = useState(false);
  const locale = getLocaleFromPath(usePathname());
  const dictionary = getDictionary(locale);
  const absoluteUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return href;
    }

    return new URL(href, window.location.origin).toString();
  }, [href]);

  useEffect(() => {
    setIsSaved(readSavedEntities().some((item) => item.id === id));
  }, [id]);

  function toggleSaved() {
    const currentItems = readSavedEntities();

    if (currentItems.some((item) => item.id === id)) {
      writeSavedEntities(currentItems.filter((item) => item.id !== id));
      setIsSaved(false);
      return;
    }

    writeSavedEntities([
      ...currentItems,
      {
        id,
        title,
        type,
        href,
        savedAt: new Date().toISOString(),
      },
    ]);
    setIsSaved(true);
  }

  async function shareEntity() {
    const browserNavigator = window.navigator as ShareCapableNavigator;

    if (browserNavigator.share) {
      await browserNavigator.share({
        title,
        url: absoluteUrl,
      });
      return;
    }

    await browserNavigator.clipboard?.writeText(absoluteUrl);
  }

  return (
    <div className="mt-5 flex flex-wrap gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[#353b3e]">
      <button
        aria-pressed={isSaved}
        className="border hairline bg-[#f7f7f5] px-4 py-3 transition hover:bg-[#f8f8f6] hover:text-black"
        onClick={toggleSaved}
        type="button"
      >
        {isSaved ? dictionary.ui.saved : dictionary.ui.save}
      </button>
      <button
        className="border hairline bg-[#f7f7f5] px-4 py-3 transition hover:bg-[#f8f8f6] hover:text-black"
        onClick={shareEntity}
        type="button"
      >
        {dictionary.ui.share}
      </button>
    </div>
  );
}
