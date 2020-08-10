import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = (props) => {
    const { title, children, onClick } = props;
    return (
        <section id="modal-section">
            <article className="modal-wrapper">
                <div className="modal-title-section">
                    <h4 className="modal-title">{title}</h4>
                    {onClick ? <div className="close" onClick={onClick}>X</div> : null}
                </div>
                <div className="modal-children-section">{children}</div>
            </article>
        </section>
        )
};

Modal.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
    onClick: PropTypes.func
}

Modal.defaultProps = {
    title: ''
}

export default React.memo(Modal);