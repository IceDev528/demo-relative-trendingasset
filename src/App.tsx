import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-20">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
