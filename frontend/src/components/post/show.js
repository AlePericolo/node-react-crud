import React, { Component } from 'react';

import { connect } from 'react-redux'
import { showModal, hideModal, deletePost, getPost } from '../../store/actions/'

import ModalRoot from '../../containers/modal'
import { BsFillEyeFill, BsPencil, BsFillTrashFill } from "react-icons/bs";

class Show extends Component {

    componentDidMount() {
        console.log("show =>", this.props);
        this.props.getPost(this.props.location.id)
    }

    render() {
        return (
            <>
                <div className="container py-5">
                    <div className="card border-dark mb-3">
                        <div className="card-header">aaa</div>
                        <div className="card-body text-dark">
                            <p className="card-text">bbb</p>
                        </div>
                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-outline-info">
                                <BsFillEyeFill />
                            </button>
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

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
    getPost: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(Show)
