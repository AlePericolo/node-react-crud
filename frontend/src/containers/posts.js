import React, { Component } from "react";
import { connect } from "react-redux";
import { findPosts } from "../store/actions";

import Post from "../components/post.js"

class Posts extends Component {

    componentDidMount() {
        this.props.findPosts()
    }

    render() {

        return (

            <div className="container h-100 py-5">
                <h1>Posts</h1>
                <div className="row">
                    {this.props.posts.map((item) => {
                        return (
                            <Post key={item._id} post={item} />
                        )
                    })}
                </div>
            </div>

        );
    }
};

const mapStatetoProps = (state) => {
    return {
        posts: state.post.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findPosts: () => dispatch(findPosts())
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Posts);
