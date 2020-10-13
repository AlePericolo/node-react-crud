import React from "react";

import { slide as Menu } from 'react-burger-menu'

const Sidebar = (props) => {
    return (
        <Menu isOpen={props.isMenuOpen} onClose={() => props.handleMenu()}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="post" className="menu-item" href="/post/">Post</a>
        </Menu>
    );
};

export default Sidebar;
