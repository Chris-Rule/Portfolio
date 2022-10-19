import NavBar from "./Components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import NoPathFound from "./Components/NoPathFound";
import Footer from "./Components/Footer";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import NavDropDown from "./Components/NavDropDown";
import { useState } from "react";

function App() {
  const [dropDownVis, setDropDownVis] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <NavDropDown />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPathFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
