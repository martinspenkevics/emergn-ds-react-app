import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <emergn-button
          label={"Click Me " + count}
          onClick={() => setCount(count + 1)}
        />
        <emergn-button
          variant="secondary"
          label={"Click Me " + count}
          onClick={() => setCount(count + 1)}
        />
        <emergn-button
          variant="tertiary"
          label={"Click Me " + count}
          onClick={() => setCount(count + 1)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <emergn-input
          id="text1"
          size="sm"
          onInput={() => setCount(count + 1)}
        />
        <emergn-input id="text2" onInput={() => setCount(count + 1)} />
      </div>
    </div>
  );
}

export default App;
