import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SiHtml5, SiPostman } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import Resume from "./Resume";

const SkillBars = () => {
    const [technologies, setTechnologies] = useState([
        {
            name: "HTML5",
            percentage: 70,
        },
        {
            name: "CSS3",
            percentage: 50,
        },
        {
            name: "Javascript",
            percentage: 60,
        },
        {
            name: "Python",
            percentage: 70,
        },
        {
            name: "ReactJS",
            percentage: 60,
        },
        {
            name: "NodeJS",
            percentage: 40,
        },
        {
            name: "Bootstrap",
            percentage: 80,
        },
        {
            name: "Django",
            percentage: 50,
        },
        {
            name: "Core Java",
            percentage: 60,
        },
    ]);

    return (
        <Container className="my-2">
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6  "}>
                <div className="subheading">
                    {" "}
                    <h5>Coding Skills</h5>
                </div>

                {technologies.map((tech, index) => {
                    return (
                        <div className="progress mb-3" key={index}>
                            <div
                                className={
                                    "progress-bar  bg-primary progress-bar-striped progress-bar-animated fill-" +
                                    tech.percentage.toString() +
                                    "-bar"
                                }
                                role="progressbar"
                                style={{ width: tech.percentage + "%" }}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {tech.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                {tech.percentage + "%"}
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div className="subheading">
                <h5>SKILLS</h5>
            </div>

            <div className="tools ">
                <hr />
                <div>
                    <h5>HTML</h5>

                    <div className="d-flex">
                        <div>
                            <img
                                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                                alt=""
                                width={100}
                                height={100}
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h5>CSS</h5>

                    <div className="d-flex">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                            alt=""
                            width={100}
                            height={100}
                        />

                        <img
                            src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <hr />
                <div>
                    <h5>FrontEnd</h5>
                    <div className="d-flex">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>{" "}
                </div>
                <hr />
                <div>
                    <h5>Backend</h5>
                    <div className="d-flex">
                        <img
                            src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <img
                            src="https://www.svgrepo.com/show/353657/django-icon.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <hr />
                <div>
                    <h5>Databases</h5>
                    <div>
                        <img
                            src="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <hr />
                <div>
                    <h5>Languages</h5>
                    <div className="d-flex">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <hr />
                <div>
                    <h5>Others</h5>
                    <div className="d-flex">
                        <img
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/1024px-Github-desktop-logo-symbol.svg.png"
                            alt=""
                            width={100}
                            height={100}
                        />
                        {/* <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
                            alt=""
                            width={100}
                            height={100}
                        /> */}
                    </div>
                </div>
                <hr />
            </div>

            <Resume />
        </Container>
    );
};
export default SkillBars;
