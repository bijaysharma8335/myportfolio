import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Home.css";
import profile from "../Assets/Profile/profile.jpeg";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-7 ">
                        <div className="home-header">
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        </div>
                        <div className="home-body">
                            <p>
                                Hi! My name is Bijay Sharma, and I work as a Software Developer in
                                Bengaluru, India. I design user interfaces with the MERN stack,
                                Redux, and NodeJs.
                            </p>
                        </div>
                        <div className="social-icons me-5">
                            <Link
                                to={{
                                    pathname: "https://www.facebook.com/bijay.sharma.8335",
                                }}
                                target="_blank"
                            >
                                <GrFacebook className=" social-icon cursor-pointer" />
                            </Link>
                            <Link>
                                <BsInstagram className="social-icon cursor-pointer" />
                            </Link>
                            <Link>
                                <BsLinkedin className="social-icon cursor-pointer" />
                            </Link>
                            <Link>
                                <FaGithub className="social-icon cursor-pointer" />
                            </Link>
                        </div>
                        <div className="btn-cv">
                            <button>Download CV</button>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 ">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
