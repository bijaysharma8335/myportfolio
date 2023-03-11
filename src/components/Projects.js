import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Projects.css";
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([
        {
            name: "Admin Dashboard",
            image: "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg",

            percentage: 70,
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/adminpanel",
            category: "Ecommerce",
            show: true,
        },
        {
            name: "Ecommerce Website",
            percentage: 50,
            image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Ecommerce-MERN",
            category: "Ecommerce",
            show: true,
        },
        {
            name: "Education Website",
            percentage: 60,
            image: "https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Education-website-React",
            category: "Education",
            show: true,
        },
        {
            name: "Youtube clone",
            percentage: 70,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/5be9b6162833263.Y3JvcCw5ODEsNzY4LDIxLDA.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            category: "Social",
            github: "https://github.com/bijaysharma8335/Ecommerce-MERN",
            show: true,
        },
    ]);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setProjects((prevProjects) => {
            // toggle the show property of the clicked project
            return prevProjects.map((p) =>
                p.name === project.name ? { ...p, show: false } : { ...p, show: true }
            );
        });
    };
    return (
        <div className="container project-container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 mb-5">
                    {projects.map((project, index) => {
                        return (
                            <>
                                {project.show && (
                                    <div
                                        className="project"
                                        onClick={() => handleProjectClick(project)}
                                        key={index}
                                    >
                                        <img
                                            src={project.image}
                                            style={{ objectFit: "cover", borderRadius: "50%" }}
                                            alt=""
                                            className=" my-2"
                                            width={100}
                                            height={100}
                                        />
                                        {/* <div className="ms-5"> */}
                                            <h4 className=" mt-3 ms-5">{project.name}</h4>
                                            {/* <h5 className="text-dark">{project.category}</h5> */}
                                        {/* </div> */}
                                    </div>
                                )}
                                {!project.show && selectedProject?.name === project.name && (
                                    <div className="show-project">
                                        <img
                                            src={project.image}
                                            style={{ objectFit: "cover", borderRadius: "50%" }}
                                            alt=""
                                            className=" my-2"
                                            width={250}
                                            height={250}
                                        />

                                        <h4 className=" text-center">{project.name}</h4>
                                        <p className="text-secondary mx-2">{project.description}</p>
                                        <button className="btn btn-light w-50 my-2">
                                            Visit Site
                                        </button>
                                        <button
                                            className="btn btn-dark w-50 my-2"
                                            href={project.github}
                                            target="_blank"
                                        >
                                            View Github
                                        </button>
                                    </div>
                                    // <Card className="my-3">
                                    //     <Card.Img variant="top" src={project.image} />
                                    //     <Card.Body>
                                    //         <Card.Title>{project.name}</Card.Title>
                                    //         <Card.Text>{project.description}</Card.Text>
                                    //         <Button href={project.github} target="_blank">
                                    //             GitHub
                                    //         </Button>
                                    //         <Button className="ms-3" variant="secondary">
                                    //             Back to Projects
                                    //         </Button>
                                    //     </Card.Body>
                                    // </Card>
                                )}
                            </>
                        );
                    })}
                </div>{" "}
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Projects;
//    {/* <p className="text-secondary">{project.description}</p> */}
//                                     {/* <Button variant="primary">Live Preview</Button>
//                             <Button
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     window.location.href = project.github;
//                                 }}
//                             >
//                                 View On Github
//                             </Button> */}
