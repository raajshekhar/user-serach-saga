import React from 'react';
import PropTypes from 'prop-types';
const inputFieldPopover = ({errorMsg, ...popoverData}) => (<div {...popoverData}>{errorMsg}</div>);

inputFieldPopover.propTypes = {
    errorMsg: PropTypes.string,
    popoverData: PropTypes.shape({
        className: PropTypes.string.isRequired,
        color: PropTypes.string
    })
}

export default React.memo(inputFieldPopover);