import React from "react";
import Projects from "../components/Projects";
import SkillBars from "../components/Skills";
import Contact from "./Contact";

const Home = () => {
    return (
        <div >
            <SkillBars />
            <Contact />
            <Projects/>
        </div>
    );
};

export default Home;
