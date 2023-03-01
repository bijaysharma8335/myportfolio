import React from "react";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "./Projects.css";
const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: "Admin Dashboard",
            image: "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg",

            percentage: 70,
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/adminpanel",
        },
        {
            name: "Ecommerce Website",
            percentage: 50,
            image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Ecommerce-MERN",
        },
        {
            name: "Education Website",
            percentage: 60,
            image: "https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Education-website-React",
        },
        {
            name: "Youtube clone",
            percentage: 70,
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/5be9b6162833263.Y3JvcCw5ODEsNzY4LDIxLDA.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Ecommerce-MERN",
        },
        {
            name: "Blogging Website",
            percentage: 60,
            image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_576/https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/Blogging-1024x576.jpg",
            description:
                "Admin Templates build usingReactjs Bootstrap Styled Components Redux react-redux ",
            github: "https://github.com/bijaysharma8335/Ecommerce-MERN",
        },
    ]);
    return (
        <div className="projects p-2"style={{marginBottom:"5%"}}>
            {projects.map((project, index) => {
                return (
                    <div className="border rounded p-2 my-2 ">
                        <Image
                            src={project.image}
                            style={{ objectFit: "cover" }}
                            alt=""
                            className="d-block rounded my-2"
                            width={400}
                            height={200}
                        />
                        <h2 className="d-block">{project.name}</h2>
                        <p className="text-secondary">{project.description}</p>
                        <Button className="m-2 rounded" variant="primary">
                            Live Preview
                        </Button>
                        <Button
                            className="m-2 rounded"
                            variant="dark"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = project.github;
                            }}
                        >
                            View On Github
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
