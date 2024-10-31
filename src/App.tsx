import { useEffect } from "react";
import "./App.css";
import useSets from "./hooks/useSets";

function App() {
  const { sets, error, isLoading } = useSets();

  useEffect(() => {
    console.log("Sets:", sets, "isLoading:", isLoading);
    if (error) {
      console.error("Error fetching sets:", error);
    }
  }, [sets, error, isLoading]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
