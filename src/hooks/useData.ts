import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  status: string;
  matches?: number;
  sets: T[];
  message?: string;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T | T[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      console.log("Fetching data from endpoint:", endpoint);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.sets || res.data.results || (res.data as T));
          console.log("Full response:", res);
          console.log("Response data:", res.data);

          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          console.error(
            "Fetch error:",
            err.response ? err.response.data : err.message
          );
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
