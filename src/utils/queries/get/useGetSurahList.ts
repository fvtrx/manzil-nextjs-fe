import { UseQueryOptions, useQuery } from "react-query";

import { ISurahItem } from "@src/data/surahList";
import axios, { AxiosError, AxiosResponse } from "axios";

type ResponseData = {
  surahList: ISurahItem[];
};

const useGetSurahList = (
  option?: UseQueryOptions<AxiosResponse<ResponseData>, AxiosError>
) => {
  return useQuery<AxiosResponse<ResponseData>, AxiosError>(
    ["SURAH_LIST"],
    () => axios.get("api/surah-list"),
    { ...option }
  );
};

export default useGetSurahList;
