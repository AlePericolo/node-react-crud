import React from "react";

import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Menu disableAutoFocus>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="post" className="menu-item" href="/post/">Post</a>
            </Menu>
        </div>
    );
};

export default Sidebar;
