import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showModal, hideModal, deletePost, getPost } from '../../store/actions/'

import { Link } from "react-router-dom";
import ModalRoot from '../../containers/modal';
import Loader from 'react-loader-spinner';
import { BsArrowLeft, BsPencil, BsFillTrashFill } from "react-icons/bs";

import { isNil } from 'lodash';

class Show extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

    render() {

        if (isNil(this.props.post))
            return (
                <div className="loader">
                    <Loader type="Puff" color="#00BFFF" height={200} width={200} />
                </div>
            )

        return (
            <>
                <div className="container py-5">
                    <div className="card border-dark mb-3">
                        <div className="card-header text-center">
                            <Link to="/post/">
                                <button type="button" className="btn btn-outline-dark float-left">
                                    <BsArrowLeft />
                                </button>
                            </Link>
                            {this.props.post.title}
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">{this.props.post.body}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-outline-warning mx-3" >
                                <BsPencil />
                            </button>
                            <button type="button" className="btn btn-outline-danger" >
                                <BsFillTrashFill />
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
        isLoading: state.load.isLoading,
        post: state.post.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
        getPost: (id) => dispatch(getPost(id)),
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
