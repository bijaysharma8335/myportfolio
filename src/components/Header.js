import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="header-main">
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="image-container">
                        <div className="header-container">
                            <h2
                                className="header-name"
                                style={{
                                    whiteSpace: "nowrap",
                                    display: "inline-block",
                                    fontSize: "20px",
                                }}
                            >
                                BIJAY SHARMA
                            </h2>
                        </div>
                        <img
                            src="https://watson-vcard.netlify.app/img/profile-img.jpg"
                            alt=""
                            className="profile-pic"
                        />
                    </div>
                    {/* nav menus */}
                    <nav className="nav-menu">
                        <ul>
                            <li>
                                <Link to="#" className="pt-link active">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="pt-link active">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="pt-link active">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="pt-link active">
                                    PortFolio
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
