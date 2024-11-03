import { useEffect } from "react";
import "./App.css";
import useSets from "./hooks/useSets";
import useThemes from "./hooks/useThemes";
import ThemeList from "./components/ThemeList";
import SetGrid from "./components/SetGrid";

function App() {
  const { sets, error, isLoading } = useSets({ theme: "Marvel Super Heroes" });
  const { themes } = useThemes();
  console.log("Themes:", themes);
  console.log("Sets:", sets);

  useEffect(() => {
    console.log("Sets:", sets, "isLoading:", isLoading);
    if (error) {
      console.error("Error fetching sets:", error);
    }
  }, [sets, error, isLoading]);

  return (
    <div className="App">
      <ThemeList
        onSelectTheme={() => {}}
        selectedTheme={themes ? themes[0] : null}
      />
      <SetGrid sets={sets} error={error} isLoading={isLoading} />
    </div>
  );
}

export default App;
