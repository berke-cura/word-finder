import './style.css';

const Modal = ({ show, hide }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p>Message send successfully</p>
                <button type="button" onClick={() => hide(false)} >
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal