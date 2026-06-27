"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Dict } from "./dict";
import { getDict, type Lang } from "./dict";

const DictContext = createContext<Dict>(getDict("en"));

export function useDict(): Dict {
  return useContext(DictContext);
}

export function DictProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const dict = getDict(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
}
