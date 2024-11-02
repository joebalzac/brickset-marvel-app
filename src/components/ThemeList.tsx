import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import useThemes, { Themes } from "../hooks/useThemes";

interface Props {
  onSelectTheme: (theme: Themes) => void;
  selectedTheme: Themes | null;
  themes?: Themes[] | undefined;
}

const ThemeList = ({ onSelectTheme, selectedTheme }: Props) => {
  const { themes, error, isLoading } = useThemes();

  if (isLoading) {
    return <div>Loading themes...</div>;
  }

  if (error) {
    return <div>Error loading themes: {error}</div>;
  }

  const initialSelectedTheme = selectedTheme || themes?.[0] || null;

  return (
    <div>
      <Listbox value={initialSelectedTheme} onChange={onSelectTheme}>
        <ListboxButton>Choose a theme</ListboxButton>
        <ListboxOptions key="all">
          {themes?.map((theme) => (
            <ListboxOption value={theme}>{theme.theme}</ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default ThemeList;
