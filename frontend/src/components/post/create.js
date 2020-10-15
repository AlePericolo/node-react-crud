import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showModal, hideModal, savePost, setSave } from '../../store/actions/'

import Form from './form';
import ModalRoot from '../../containers/modal';
import Icon from "../ui/icon";

class Create extends Component {

    goBack = () => {
        this.props.history.push('/post/');
    }

    savePost = (values) => {
        this.props.savePost(values);
    }

    render() {

        if (this.props.isSaved) {
            this.props.showModal({
                open: true,
                title: 'New post added',
                message: 'Post saved correctly, go to list..',
                closeModal: () => {
                    this.props.hideModal();
                    this.props.setSave(false);
                    this.props.history.push('/post/')
                }
            }, 'success');
        }

        return (
            <>
                <div className="container py-5">
                    <div className="card border-dark mb-3">
                        <div className="card-header text-center">
                            <div className="row">
                                <div className="col-1">
                                    <button type="button" className="btn btn-outline-dark" onClick={() => this.goBack()}>
                                        <Icon icon="arrow-left" />
                                    </button>
                                </div>
                                <div className="col-10">
                                    <h3>New Post</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <Form onSubmit={this.savePost} />
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
        isSaved: state.post.isSaved
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
        savePost: (values) => dispatch(savePost(values)),
        setSave: (value) => dispatch(setSave(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
