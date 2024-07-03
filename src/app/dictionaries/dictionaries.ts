const dictionaries: any = {
  en: () => import("./en.json").then((module) => module.default),
  nl: () => import("./ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
