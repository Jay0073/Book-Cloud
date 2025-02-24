import "./App.css";
import Home from "./Pages/Home";
import Mylibrary from "./Pages/Mylibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Explore from "./Pages/Explore";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Mylibrary />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<AboutPage />} />

          
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
