import useData from "./useData";

export interface Themes {
  theme: string;
}

interface UseThemesResult {
  themes: Themes[] | undefined;
  error: string | null;
  isLoading?: boolean;
}

const useThemes = (
  params: {
    query?: string;
    theme?: string;
  } = {}
): UseThemesResult => {
  const { query = "", theme = "" } = params;

  const apiParams = JSON.stringify({
    query: query || undefined,
    theme: theme || undefined,
  });

  const { data, error, isLoading } = useData<{
    themes: Themes[];
  }>("/getThemes", {
    params: {
      userHash: "",
      params: apiParams,
    },
  });

  return {
    themes: Array.isArray(data) ? data.flatMap((d) => d.themes) : data?.themes,
    error,
    isLoading,
  };
};

export default useThemes;
