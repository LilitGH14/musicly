import { ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const fetchSongsCategoriesData: (
  category: string
) => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/assets/mock/categories-data.json`
  );
  return response;
};

export const fetchSongsData: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/assets/mock/songs.json`
  );
  return response;
};

export const fetchSongDataById: (
  id: Number
) => Promise<ResponseGeneralType> = async (id: Number) => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/assets/mock/song_1.json`
  );
  return response;
};
