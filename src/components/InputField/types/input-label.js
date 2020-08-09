import React from 'react';
import PropTypes from 'prop-types';

const inputFieldLabel = ({id, labelClass = '', labelName, labelImp}) => (
    <label htmlFor={id} className={labelClass}>
        <span>{labelName}</span>
        <sup className={`text-danger ${labelImp ? '' : 'd-none'}`}>*</sup>
    </label>
);

inputFieldLabel.propTypes = {
    id: PropTypes.string.isRequired,
    labelClass: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    labelImp: PropTypes.any
}

export default React.memo(inputFieldLabel);