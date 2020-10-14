import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showModal, hideModal, getPost, setPost, deletePost, setDelete } from '../../store/actions/'

import Spinner from "../spinner";
import ModalRoot from '../../containers/modal';
import { BsArrowLeft, BsPencil, BsFillTrashFill } from "react-icons/bs";

import { isNil } from 'lodash';

class Show extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

    goBack = () => {
        this.props.setPost(null);
        this.props.history.push('/post/');
    }

    deletePost = () => {
        this.props.showModal({
            open: true,
            title: 'Delete Post',
            message: `Are you sure you want to delete "${this.props.post.title}"?`,
            closeModal: () => this.props.hideModal(),
            deleteAction: () => { this.props.deletePost(this.props.post._id) }
        }, 'delete');
    }

    render() {

        if (this.props.isDeleted) {
            this.props.setDelete(false);
            this.props.history.push('/post/');
        }

        if (isNil(this.props.post)) return <Spinner />

        return (
            <>
                <div className="container py-5">
                    <div className="card border-dark mb-3">
                        <div className="card-header text-center">
                            <div className="row">
                                <div className="col-1">
                                    <button type="button" className="btn btn-outline-dark" onClick={() => this.goBack()}>
                                        <BsArrowLeft />
                                    </button>
                                </div>
                                <div className="col-10">
                                    <h3>{this.props.post.title}</h3>
                                </div>
                                <div className="col-1 text-right">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => this.deletePost()}>
                                        <BsFillTrashFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">{this.props.post.body}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-outline-warning mx-3" onClick={() => this.props.history.push(`/post/edit/${this.props.post._id}`)}>
                                <BsPencil />
                            </button>
                        </div>
                    </div>
                </div>
                <ModalRoot hideModal={this.props.hideModal} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.post.post,
        isDeleted: state.post.isDeleted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
        getPost: (id) => dispatch(getPost(id)),
        setPost: (value) => dispatch(setPost(value)),
        deletePost: (id) => dispatch(deletePost(id, false)),
        setDelete: (value) => dispatch(setDelete(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
