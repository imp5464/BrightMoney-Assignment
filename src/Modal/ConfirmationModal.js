import React from "react";
import Modal from "./Modal";
import "./ConfirmationModal.css";
const ConfirmationModal = (props) => {
    return (
        <Modal show={props.show} modalClosed={props.cancelTask}>
            <div className="confirmation-modal">
                <p className="modal-statement">{props.statement}</p>
                <div className="confirmation-button-div">
                    <button
                        onClick={props.confirmTask}
                        className="confirmation-modal-button"
                    >
                        Yes
                    </button>
                    <button
                        onClick={props.cancelTask}
                        className="confirmation-modal-button"
                    >
                        No
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
