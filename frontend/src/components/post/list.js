import React, { Component } from 'react';
import { connect } from "react-redux";
import { showModal, hideModal, findPosts, deletePost } from '../../store/actions/';

import Spinner from "../spinner";
import ModalRoot from '../../containers/modal';
import { BsFillEyeFill, BsPencil, BsFillTrashFill, BsPlus } from "react-icons/bs";


class List extends Component {

    componentDidMount() {
        this.props.findPosts()
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

        if (this.props.isLoading) return <Spinner />

        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10"><h1>Posts</h1></div>
                        <div className="col-2">
                            <button type="button" className="btn btn-outline-success float-right" onClick={() => this.props.history.push("/post/create/")}>
                                <BsPlus />
                            </button>
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
                                                    <button type="button" className="btn btn-sm btn-outline-info" onClick={() => this.props.history.push(`/post/show/${item._id}`)}>
                                                        <BsFillEyeFill />
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-warning mx-3" onClick={() => this.props.history.push(`/post/edit/${item._id}`)}>
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
