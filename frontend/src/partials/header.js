import React from "react";

import { BsJustify } from "react-icons/bs";

const Header = (props) => {
    return (
        <header>
            <div className="container-fluid text-center py-2">
                {!props.isMenuOpen &&
                    <button className="btn btn-sm btn-outline-dark float-left" onClick={() => props.handleMenu()}>
                        <BsJustify />
                    </button>
                }
                Header
            </div>
        </header>
    );
};

export default Header;
