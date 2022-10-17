import NavBar from "./Components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Components/Home";
import NoPathFound from "./Components/NoPathFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPathFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
