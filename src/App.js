import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SkillBars from "./components/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;
