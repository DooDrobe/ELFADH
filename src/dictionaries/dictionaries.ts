import "server-only";

const dictionaries = {
  id: () => import("./id.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
