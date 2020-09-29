import React from "react";
import { NavLink } from "react-router-dom";

const header = () => {

    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">NodeJS API</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/posts">Post</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default header;
