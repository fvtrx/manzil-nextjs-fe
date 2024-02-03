import axios, { AxiosHeaderValue, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { call } from "redux-saga/effects";

export enum ResponseStatus {
  success = "SUCCESS",
  failed = "FAILED",
  failure = "FAILURE",
}

type ICallMethodType = "get" | "post";

interface IAxiosInstanceProps {
  endpoint: string;
  params?: any;
  callMethod?: ICallMethodType;
}

export const useRequest = (
  request: AxiosRequestConfig<any>,
  manual: boolean = true
) => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getDataFromRequest = async () => {
    setLoading(true);

    try {
      let response;
      response = await axios(request);
      setResult(response?.data ?? null);
    } catch (error: any) {
      setResult({
        status: ResponseStatus.failed,
        errorDetails: error?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const run = () => {
    getDataFromRequest();
  };

  useEffect(() => {
    if (manual === false) {
      run();
    }
  }, []);

  return { result, run, loading };
};

export const AxiosInstanceAPI = async ({
  endpoint,
  params = {},
  callMethod = "get",
}: IAxiosInstanceProps) => {
  try {
    const responseData = await axios({
      url: `${process.env.NEXT_PUBLIC_QURAN_BASE_URL}${endpoint}`,
      headers: { Accept: "application/json" },
      method: callMethod,
      maxBodyLength: Infinity,
      params,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
