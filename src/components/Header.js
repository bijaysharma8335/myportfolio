import React from "react";
import { Link } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
// const Header = () => {
//     return (
//         <div className="header-main">
//             <div className="header-wrapper">
//                 <div className="header-content">
//                     <div className="image-container">
//                         <div className="header-container">
//                             <h2
//                                 className="header-name"
//                                 style={{
//                                     whiteSpace: "nowrap",
//                                     display: "inline-block",
//                                     fontSize: "20px",
//                                 }}
//                             >
//                                 BIJAY SHARMA
//                             </h2>
//                         </div>
//                         <img
//                             src="https://watson-vcard.netlify.app/img/profile-img.jpg"
//                             alt=""
//                             className="profile-pic"
//                         />
//                     </div>
//                     {/* nav menus */}
//                     <nav className="nav-menu">
//                         <ul>
//                             <li>
//                                 <Link to="#" className="pt-link active">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="#" className="pt-link active">
//                                     About Me
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="#" className="pt-link active">
//                                     Resume
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="#" className="pt-link active">
//                                     PortFolio
//                                 </Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };

const Header = () => {
    return (
        <div>
            <div className="header" style={{ marginBottom: "5%" }}>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link className="content" to="/">
                                <BiHome className="me-2" />
                                <h4> Home</h4>
                            </Link>
                        </li>
                        <li>
                            <Link className="content" to="/skills">
                                <FaUserAlt className="me-2" />
                                <h4>About</h4>
                            </Link>
                        </li>
                        <li>
                            <Link className="content me-1" to="/projects">
                                <GrProjects className="me-2 " />
                                <h4> Projects</h4>
                            </Link>
                        </li>
                        <li>
                            <Link className="content" to="/contact">
                                <MdPermContactCalendar className="me-2" />
                                <h4>Contact</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
