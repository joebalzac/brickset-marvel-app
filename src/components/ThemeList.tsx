import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import useThemes, { Themes } from "../hooks/useThemes";

interface Props {
  onSelectTheme: (theme: Themes) => void;
  selectedTheme: Themes | null;
}

const ThemeList = ({ onSelectTheme, selectedTheme }: Props) => {
  const { themes, error, isLoading } = useThemes();

  return (
    <div>
      <Listbox value={selectedTheme} onChange={onSelectTheme}>
        <Listbox.Button>Choose a theme</Listbox.Button>
        <Listbox.Options>
          {themes?.map((theme) => (
            <Listbox key={theme.themeId} value={theme}>
              {theme.name}
            </Listbox>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ThemeList;
