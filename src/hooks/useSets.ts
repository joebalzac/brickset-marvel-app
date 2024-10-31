import useData from "./useData";

export interface Sets {
  setId: number;
  name: string;
  numberVariant: number;
  theme: string;
  subtheme: string;
  image: string;
  pieces: number;
}

interface UseSetsResult {
  sets: Sets[] | undefined;
  error: string | null;
  isLoading?: boolean;
}

const useSets = (
  params: {
    query?: string;
    theme?: string;
  } = {}
): UseSetsResult => {
  const { query = "", theme = "" } = params;

  const apiParams = JSON.stringify({
    query: query || undefined,
    theme: theme || undefined,
  });

  const { data, error, isLoading } = useData<Sets>("/getSets", {
    params: {
      userHash: "",
      params: apiParams,
    },
  });

  return {
    sets: data,
    error,
    isLoading,
  };
};

export default useSets;
