import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
