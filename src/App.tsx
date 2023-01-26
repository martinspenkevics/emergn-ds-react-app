import { useState } from "react";
import { EmergnButton, EmergnInput } from "emergn-design-poc-react";

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
        <EmergnButton
          label={"Click Me " + count}
          onClick={() => setCount(count + 1)}
        />
        <EmergnButton
          variant="secondary"
          label={"Click Me " + count}
          onClick={() => setCount(count + 1)}
        />
        <EmergnButton
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
        <EmergnInput size="sm" onInput={() => setCount(count + 1)} />
        <EmergnInput onInput={() => setCount(count + 1)} />
      </div>
    </div>
  );
}

export default App;
