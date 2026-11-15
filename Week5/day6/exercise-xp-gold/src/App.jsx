import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Occur an error</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </Modal>
    </>
  );
}

export default App;
