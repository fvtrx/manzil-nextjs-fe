import axios, { AxiosHeaderValue, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export enum ResponseStatus {
  success = "SUCCESS",
  failed = "FAILED",
  failure = "FAILURE",
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
