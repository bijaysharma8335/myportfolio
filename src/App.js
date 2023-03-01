import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SkillBars from "./components/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/skills" element={<SkillBars />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
