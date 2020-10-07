import React from 'react';

import { connect } from 'react-redux'
import { showModal, hideModal, deletePost, findPosts } from '../store/actions/'

import ModalRoot from '../containers/modal'
import { BsFillTrashFill } from "react-icons/bs";

const post = (props) => {

    const deletePost = (post) => {
        props.showModal({
            open: true,
            title: 'Delete Post',
            message: `Are you sure you want to delete "${post.title}"?`,
            closeModal: () => props.hideModal(),
            deleteAction: () => { props.deletePost(post._id) }
        }, 'delete');
    }
    const editPost = (post) => {
        console.log(post);
    }

    return (
        <>
            <div className="col-4">
                <div className="card border-dark mb-3">
                    <div className="card-header">{props.post.title}</div>
                    <div className="card-body text-dark">
                        <p className="card-text">{props.post.body}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-outline-danger" onClick={() => deletePost(props.post)}>
                            <BsFillTrashFill />
                        </button>
                        <button type="button" className="btn btn-outline-warning" onClick={() => editPost(props.post)}>
                            <BsFillTrashFill />
                        </button>
                    </div>
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

export default connect(null, mapDispatchToProps)(post)
