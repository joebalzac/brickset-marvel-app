import useData from "./useData";

export interface Themes {
  themeId: number;
  name: string;
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

  const { data, error, isLoading } = useData<Themes>("/getThemes", {
    params: {
      userHash: "",
      params: apiParams,
    },
  });

  return {
    themes: data,
    error,
    isLoading,
  };
};

export default useThemes;
