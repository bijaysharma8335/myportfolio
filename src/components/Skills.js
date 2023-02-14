import React, { useState } from "react";
import { Container } from "react-bootstrap";

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
        <Container>
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
                <h1>Coding Skills</h1>
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
                                {tech.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                                {tech.percentage + "%"}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};
export default SkillBars;
