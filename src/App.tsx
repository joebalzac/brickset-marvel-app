import { useEffect } from "react";
import "./App.css";
import useSets from "./hooks/useSets";
import useThemes from "./hooks/useThemes";
import ThemeList from "./components/ThemeList";

function App() {
  const { sets, error, isLoading } = useSets();
  const { themes } = useThemes();

  useEffect(() => {
    console.log("Sets:", sets, "isLoading:", isLoading);
    if (error) {
      console.error("Error fetching sets:", error);
    }
  }, [sets, error, isLoading]);

  return (
    <div className="App">
      <h1 className="text-5xl">HELLO THIS IS WORKING</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {sets && sets.length === 0 && <p>No sets found.</p>}
      {sets && sets.length > 0 && (
        <ul>
          {sets.map((set) => (
            <li key={set.setId}>{set.name}</li>
          ))}
        </ul>
      )}
      <ThemeList
        onSelectTheme={() => {}}
        selectedTheme={themes ? themes[0] : null}
      />
    </div>
  );
}

export default App;
