import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

import { default as modalTypes } from '../components/modal'

const MODAL_TYPES = {
    'alert': modalTypes.alertModal,
    'delete': modalTypes.deleteModal
}

class ModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: props.modalProps.open
        }
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalProps.open !== this.props.modalProps.open) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open
            })
        }
    }

    closeModal() {
        this.props.hideModal()
    }

    render() {

        if (!this.props.modalType)
            return null


        const Modal = MODAL_TYPES[this.props.modalType]

        return (
            <div>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    bodyOpenClassName="modal-open"
                    className="modal-dialog"
                >
                    <Modal
                        closeModal={this.closeModal}
                        {...this.props.modalProps}
                    />
                </ReactModal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.modal
})

export default connect(mapStateToProps, null)(ModalContainer)