import React, { Component } from 'react';
import { connect } from "react-redux";
import { showModal, hideModal, findPosts, deletePost } from '../../store/actions/';

import { Link } from "react-router-dom";
import ModalRoot from '../../containers/modal';
import Loader from 'react-loader-spinner';
import { BsFillEyeFill, BsPencil, BsFillTrashFill, BsPlus } from "react-icons/bs";


class List extends Component {

    componentDidMount() {
        this.props.findPosts()
    }

    editPost = (post) => {
        console.log(post);
    }

    deletePost = (post) => {
        this.props.showModal({
            open: true,
            title: 'Delete Post',
            message: `Are you sure you want to delete "${post.title}"?`,
            closeModal: () => this.props.hideModal(),
            deleteAction: () => { this.props.deletePost(post._id) }
        }, 'delete');
    }

    render() {

        if (this.props.isLoading)
            return (
                <div className="loader">
                    <Loader type="Puff" color="#00BFFF" height={200} width={200} />
                </div>
            )

        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10"><h1>Posts</h1></div>
                        <div className="col-2">
                            <Link to="/post/create/">
                                <button type="button" className="btn btn-outline-dark float-right">
                                    <BsPlus />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-sm table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.posts.map((item) => {
                                        return (
                                            <tr key={item._id}>
                                                <td>{item.title}</td>
                                                <td className="text-right">
                                                    <Link to={`/post/show/${item._id}`}>
                                                        <button type="button" className="btn btn-sm btn-outline-info">
                                                            <BsFillEyeFill />
                                                        </button>
                                                    </Link>
                                                    <button type="button" className="btn btn-sm btn-outline-warning mx-3" >
                                                        <BsPencil />
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => this.deletePost(item)}>
                                                        <BsFillTrashFill />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ModalRoot hideModal={this.props.hideModal} />
            </>
        );
    }
};

const mapStatetoProps = (state) => {
    return {
        isLoading: state.load.isLoading,
        posts: state.post.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
        findPosts: () => dispatch(findPosts()),
        deletePost: (id) => dispatch(deletePost(id))
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(List);
