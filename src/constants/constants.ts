import { Category, LangItem } from "@/types/types";
import enFlag from "../../public/assets/img/flags/en.png";
import koFlag from "../../public/assets/img/flags/ko.png";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "New",
  },
  {
    id: 2,
    name: "Groups",
  },
  {
    id: 3,
    name: "Duets",
  },
  {
    id: 4,
    name: "Solos",
  },
];

export const Languages: LangItem[] = [
  {
    id: "en_lang",
    name: "en",
    src: enFlag,
  },
  {
    id: "ko_lang",
    name: "ko",
    src: koFlag,
  },
];
