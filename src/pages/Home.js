import React from "react";
import Projects from "../components/Projects";
import SkillBars from "../components/Skills";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Home.css";
import profile from "../Assets/Profile/profile.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="home-icons">
                        <Link
                        // to={{
                        //     pathname: "https://www.facebook.com/bijay.sharma.8335",
                        // }}
                        // target="_blank"
                        >
                            <BsFacebook className=" facebook cursor-pointer" />
                        </Link>
                        <Link>
                            <BsInstagram className="instagram cursor-pointer" />
                        </Link>
                        <Link>
                            <BsLinkedin className="linkedin cursor-pointer" />
                        </Link>
                        <Link>
                            <BsGithub className="github cursor-pointer" />
                        </Link>
                    </div>
                    <div className="btn-cv">
                        <button>Download CV</button>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
            <div className="home"></div>
        </div>
    );
};

export default Home;
