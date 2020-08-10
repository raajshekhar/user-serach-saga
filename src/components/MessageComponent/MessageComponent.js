import React from 'react';
import PropTypes from 'prop-types';
import './message-component.scss';

const MessageComponent = (props) => {
    const { message, icon } = props;
    return (
        <section data-testid="message-wrapper" id="error-section">
            <article>
                <i className= "material-icons">{icon}</i>
                <h5 role="show-message">{message}</h5>
            </article>
        </section>
    );
};

MessageComponent.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

MessageComponent.defaultProps = {
    message: '',
    icon: 'error'
}

export default React.memo(MessageComponent);