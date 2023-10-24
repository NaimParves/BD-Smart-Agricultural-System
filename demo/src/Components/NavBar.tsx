import React from "react";
import {Link, useNavigate} from "react-router-dom";

const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <header className = "p-3 bg-dark text-white">
            <div className = "container">
                <div className = "d=flex flex-wrap algin-items-center justify-content-center justify-content-lg-start">
                    <div onClick = {() => {
                        navigate("/");
                    }}
                    className = "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <h4>BD Smart Agricultural Solution</h4>
                    </div>
                    <ul className = "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center md-md-0">
                        <li>
                            <Link to="/" className="nav-link px-2 text=white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="nav-link px-2 text-white">
                                Blog
                            </Link>
                        </li>    
                    </ul>
                    <div className ="text-end">
                        <Link to="/signin"
                        type="button"
                        className="btn btn-outline-light me-2">
                            Login
                        </Link>
                        <Link to="/signup" type="button" className = "btn btn-warning">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    
    );
};

export default NavBar;