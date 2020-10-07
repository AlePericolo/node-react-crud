import React from 'react';

import { connect } from 'react-redux'
import { showModal, hideModal, deletePost, findPosts } from '../../store/actions/'

import ModalRoot from '../../containers/modal'
import { BsFillEyeFill, BsPencil, BsFillTrashFill } from "react-icons/bs";

const Show = (props) => {

    console.log("show POST", props);

    return (
        <>
            <div className="card border-dark mb-3">
                <div className="card-header">{props.post.title}</div>
                <div className="card-body text-dark">
                    <p className="card-text">{props.post.body}</p>
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

            <ModalRoot hideModal={props.hideModal} />
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => dispatch(showModal({ modalProps, modalType })),
    deletePost: (id) => dispatch(deletePost(id)),
    findPosts: () => dispatch(findPosts())
})

export default connect(null, mapDispatchToProps)(Show)
