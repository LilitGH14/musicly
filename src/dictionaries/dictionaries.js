const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  nl: () => import("./ko.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
