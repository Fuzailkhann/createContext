import "./styles.css";
import { useState } from "react";
import Child from "./child";
import counterContext from "./context/valueContext";
import carcontext from "./context/carContext";

export default function App() {
  const [value] = useState(20);
  return (
    <counterContext.Provider value={value}>
      <carcontext.Provider value={{ name: "audi car" }}>
        <div className="App">
          I am a parent and i know value {value}
          <div>
            <Child />
          </div>
        </div>
      </carcontext.Provider>
      .
    </counterContext.Provider>
  );
}
