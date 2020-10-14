import React from "react";

import Sidebar from "../partials/sidebar";
import Header from "../partials/header";
import Footer from "../partials/footer";

const Layout = (props) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar menu={props.menu} />
                <div className='col'>
                    <Header />
                    <main role="main">{props.children}</main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
