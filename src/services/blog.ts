import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const fetchStoriesData: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.get(
      `/assets/mock/stories_data.json`
    );
    return response;
  };