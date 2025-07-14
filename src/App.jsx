import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ThemeContext from "./context/theme";
import Setting from "./pages/Setting";
import Services from "./pages/ServiceList";
import SingleCard from "./pages/SingleCard";
import PortfolioSingleCard from "./pages/PortfolioSingleCard";
import Footer from "./components/Footer"


function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <NavBar />
        <div
          className={`container my-5 d-flex justify-content ${
            theme === "dark"
              ? "bg-dark text-light"
              : theme === "light"
              ? "bg-light"
              : " "
          }`}
          // style={{ backgroundColor: "#f5f5f5" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portof" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sets" element={<Setting />} />
            <Route path="/service" element={<Services />} />
            <Route path="/scard/:id" element={<SingleCard />} />
            <Route path="/portof/:id" element={<PortfolioSingleCard />} />

          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
