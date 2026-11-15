import "./App.css";
import Clock from "./Clock";
import Form from "./Form";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
      <Form />
    </>
  );
}

export default App;
