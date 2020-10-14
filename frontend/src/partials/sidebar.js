import React from "react";

import { slide as Menu } from 'react-burger-menu'

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <Menu disableAutoFocus>
                {props.menu.map((element, index) => {
                    return (
                        <a id={element.name} className="menu-item" href={element.path} key={index}>
                            {element.name}
                        </a>
                    )
                })
                }
            </Menu>
        </div>
    );
};

export default Sidebar;
