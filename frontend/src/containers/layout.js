import React, { useState } from "react";

import Sidebar from "../partials/sidebar";
import Header from "../partials/header";
import Footer from "../partials/footer";

const Layout = (props) => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!isMenuOpen)
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className={isMenuOpen ? 'col-2 pl-0' : ''}>
                    <Sidebar isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
                </div>
                <div className={isMenuOpen ? 'col-10' : 'col-12'}>
                    <Header isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
                    <main role="main">{props.children}</main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
