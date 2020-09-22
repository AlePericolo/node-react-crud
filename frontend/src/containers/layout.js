import React from "react";

import Header from "../partials/header";
import Footer from "../partials/footer";

const layout = (props) => {

    console.log(props);

    return (
        <>
            <Header />
            <main role="main">{props.children}</main>
            <Footer />
        </>
    );
};

export default layout;
