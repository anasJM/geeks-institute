import { useState } from "react";
import "./App.css";
import BuggyCounter from "./BuggyCounter";
import Child from "./Child";
import Color from "./Color";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [state, setState] = useState(true);
  const changeChildState = () => {
    setState(false);
  };

  return (
    <>
      <h3>
        These two counters are inside the same error boundary. If one crashes,
        the error boundary will replace both of them.
      </h3>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <h3>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </h3>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      This counter is not inside of boundary. So if crashes, all other
      components are deleted.
      <BuggyCounter />
      <br />
      <Color />
      {state && <Child />}
      <button onClick={changeChildState}>Delete header</button>
    </>
  );
}

export default App;
