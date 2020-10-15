import React from "react";

import { slide as Menu } from 'react-burger-menu'

import Icon from "../components/ui/icon"

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <Menu disableAutoFocus>
                {props.menu.map((element, index) => {
                    return (
                        <a id={element.name} className="menu-item" href={element.path} key={index}>
                            <Icon icon={element.icon} />
                            <span className="ml-3">{element.name}</span>
                        </a>
                    )
                })
                }
            </Menu>
        </div>
    );
};

export default Sidebar;
