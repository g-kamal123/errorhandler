import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Errorboundary from "./components/Errorboundary";
import Fallback from "./components/Fallback";
import Random from "./components/Random";
import RandomFunctional from "./components/RandomFunctional";

function App() {
  const [num, setNum] = useState(20);
  const randomnumHandler = () => {
    let num = Math.floor(Math.random() * 21);
    if (num === 0) num = num + 1;
    setNum(num);
    // console.log(num)
  };
  const errorHandler = (error, errorinfo) => {
    console.log("functional", error, errorinfo);
  };
  return (
    <div className="App">
      {num >= 5 && <button onClick={randomnumHandler}>Genrate</button>}
      <Errorboundary try={() => setNum(20)} num={num}>
        <Random num={num} />
      </Errorboundary>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <RandomFunctional />
      </ErrorBoundary>
    </div>
  );
}

export default App;
