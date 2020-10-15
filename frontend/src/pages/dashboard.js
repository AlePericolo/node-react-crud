import React from "react";

import Icon from "../components/ui/icon"

const Dashboard = (props) => {

    return (
        <div className="container py-5">
            {props.menu.map((element, index) => {
                if (element.path === '/') return null;
                return (
                    <div className="col-4" key={index}>
                        <div className="card bg-light">
                            <div className="card-header text-center">{element.name}</div>
                            <div className="card-body text-center">
                                <button className="btn btn-sm btn-dark" onClick={() => props.history.push(element.path)}>
                                    <span className="mr-3">show</span>
                                    <Icon icon={element.icon} />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default Dashboard;
