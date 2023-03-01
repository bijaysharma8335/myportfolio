import React from "react";
import Projects from "../components/Projects";
import SkillBars from "../components/Skills";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Home.css";
import profile from "../Assets/Profile/profile.jpeg";
const Home = () => {
    return (
        <div className="home">
            {/* <img src={profile} alt="" width={200} height={200} /> */}
            {/* <SkillBars /> */}
            {/* <Projects /> */}
            <div className="home-icons">
                <BsFacebook />
                <BsInstagram />
                <BsLinkedin />
                <BsGithub />
            </div>
        </div>
    );
};

export default Home;
