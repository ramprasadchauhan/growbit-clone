import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contect from "./pages/Contect";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Career from "./pages/Career";
import "./index.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
