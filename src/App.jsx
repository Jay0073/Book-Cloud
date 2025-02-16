import "./App.css";
import Home from "./Pages/Home";
import Mylibrary from "./Pages/Mylibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Mylibrary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
