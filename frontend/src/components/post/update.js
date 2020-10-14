import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showModal, hideModal, getPost, setPost, savePost, setSave, deletePost, setDelete } from '../../store/actions/'

import Form from './form';
import Spinner from "../spinner";
import ModalRoot from '../../containers/modal';
import { BsArrowLeft, BsFillTrashFill } from "react-icons/bs";

import { isNil } from 'lodash';

class Update extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

    goBack = () => {
        this.props.setPost(null);
        this.props.history.push('/post/');
    }

    savePost = (values) => {
        this.props.savePost(values);
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
            this.props.setPost(null);
            this.props.history.push('/post/');
        }

        if (this.props.isSaved) {
            this.props.showModal({
                open: true,
                title: 'Post updated',
                message: `${this.props.post.title} updated correctly`,
                closeModal: () => {
                    this.props.hideModal();
                    this.props.setSave(false);
                }
            }, 'success');
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
                                    <h3>Edit Post</h3>
                                </div>
                                <div className="col-1 text-right">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => this.deletePost()}>
                                        <BsFillTrashFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <Form onSubmit={this.savePost} initialValues={this.props.post} />
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
        isSaved: state.post.isSaved,
        isDeleted: state.post.isDeleted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
        getPost: (id) => dispatch(getPost(id)),
        setPost: (value) => dispatch(setPost(value)),
        savePost: (values) => dispatch(savePost(values)),
        setSave: (value) => dispatch(setSave(value)),
        deletePost: (id) => dispatch(deletePost(id, false)),
        setDelete: (value) => dispatch(setDelete(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)
