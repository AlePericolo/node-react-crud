import React from "react";
import { Link } from "react-router-dom";

const dashboard = () => {

    return (
        <div className="container py-5">
            <div className="col-4">
                <div className="card bg-light">
                    <div className="card-header text-center">Post</div>
                    <div className="card-body text-center">
                        <h5 className="card-text">List of posts</h5>
                        <Link to="/post/"><p className="btn btn-sm btn-dark">show all</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dashboard;
