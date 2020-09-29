import React from "react";

const post = (props) => {

    return (
        <div className="col-4">
            <div className="card border-dark mb-3">
                <div className="card-header">{props.post.title}</div>
                <div className="card-body text-dark">
                    <p className="card-text">{props.post.body}</p>
                </div>
                <div className="card-footer">Footer</div>
            </div>
        </div>
    )
}

export default post