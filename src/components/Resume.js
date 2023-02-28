import React from "react";
import "./Resume.css";
const Resume = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="subheading">
                    <h5>Experience</h5>
                </div>
                <ul className="experience">
                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>Junior Software Developer</h4>
                            <h5>GA Morgan Dynamics Pvt Ltd ,Bangalore </h5>
                            <p className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                mollitia, id possimus quia consequatur hic itaque vel omnis modi at
                                accusamus ab saepe, sunt eius tempore voluptatibus, cupiditate error
                                dolore?
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">2023</span>
                            <span className="from">2022</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="col-md-6">
                <div className="subheading">
                    <h5>Education</h5>
                </div>
                <ul className="education">
                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>BE in Computer Science</h4>
                            <h5>Bangalore Technological Institute,Bangalore </h5>
                            <p className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                mollitia, id possimus quia consequatur hic itaque vel omnis modi at
                                accusamus ab saepe, sunt eius tempore voluptatibus, cupiditate error
                                dolore?
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">2020</span>
                            <span className="from">2016</span>
                        </span>
                    </li>
                    <li>
                        <span className="line-left"></span>
                        <div className="content">
                            <h4>+2 Science</h4>
                            <h5>Shikshadeep Higher Secondary School ,Biratnagar,Nepal</h5>
                            <p className="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                                mollitia, id possimus quia consequatur hic itaque vel omnis modi at
                                accusamus ab saepe, sunt eius tempore voluptatibus, cupiditate error
                                dolore?
                            </p>
                        </div>
                        <span className="year">
                            <span className="to">2014</span>
                            <span className="from">2012</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;
