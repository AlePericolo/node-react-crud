import React from "react";
import { Link } from "react-router-dom";

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
                                <Link to={element.path} ><p className="btn btn-sm btn-dark">show</p></Link>
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
