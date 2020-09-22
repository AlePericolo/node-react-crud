import React, { Component } from "react";
import { connect } from "react-redux";
import { findPosts } from "../store/actions";

class Post extends Component {

    componentDidMount() {
        this.props.onFindPosts()
    }

    render() {

        return (

            <div className="container-fluid bg-success">
                <h3>Post</h3>
                <ul>
                    {posts.map((item, index) => {
                        <li key={index}>
                            {item.title}
                        </li>
                    })}
                </ul>
            </div>

        );
    }
};

const mapStatetoProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFindPosts: () => dispatch(findPosts())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Post);
