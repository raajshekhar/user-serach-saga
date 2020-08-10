import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputFieldLabel from './types/input-label';
import { dynamicIcon } from './types/icons';
import InputFieldPopover from './types/pop-over';
import SearchResultsComponent from './types/SearchResults';
import { customOnKeyPress } from '../../utilities/commonFunction';
import './input-field.scss';

const InputField = (props) => {

    const { name, type, id, value, className, autoComplete, onChange, onListselect, onKeyPress, onKeyDown, onBlur, onKeyUp, placeholder } = props;
    const { autoFocus, maxLength, readOnly, defaultChecked, restrictions, icon, rows, cols, ...popoverProps } = props;

    const { touched, errorMsg, labelClass, labelName, labelImp, showIcon } = popoverProps

    let inputFields = { name, type, id, value, autoFocus, onKeyPress, onBlur, onChange, onKeyDown, className, onKeyUp, placeholder, autoComplete, maxLength, rows, cols, readOnly, defaultChecked };

    const popoverData = { className:  `${errorMsg ? 'error' : 'success'}-message`, color: errorMsg ? 'red' : 'green' , errorMsg };
    const labelData = { id, labelClass: `${labelClass} ml-4`, labelName, labelImp };

    let suggestions = props.suggestions || [];
    if(value) suggestions = ( type === 'search' && suggestions.length ) ? suggestions : [{ title: 'No Data Found!', id: 'No Data Found!'}];

    const onEnter = (e) => e.key === 'Enter' && props.onEnter(e);

    return (
        <div className={`custom-input-validation custom-${type}-field`}>
          {(labelName && type !== 'checkbox') && <InputFieldLabel {...labelData} /> }
          <div className={`position-relative ${icon ? 'has-icon': ''}`}>
              <input {...inputFields} spellcheck="false"  onChange={onChange} onKeyPress={(e)=>{customOnKeyPress(e, restrictions, onEnter)}}  />
              {(type==='checkbox') && <InputFieldLabel {...labelData} />}
              { ( type === 'search' ) ? <div onClick={onListselect} className={`search-result ${suggestions.length ? '' : 'd-none'}`}>{suggestions.length ? <SearchResultsComponent list={suggestions} /> : null}</div> : null}
              {showIcon}
              { icon ? dynamicIcon({icon, id}) : null }
          </div>
          {errorMsg && touched && <InputFieldPopover {...popoverData} />}
        </div>
      );

};

InputField.propTypes = {
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    onListselect: PropTypes.func,
    name: PropTypes.string,
    className: PropTypes.string,
    autoComplete: PropTypes.string,
    touched: PropTypes.bool,
    errorMsg: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    readOnly: PropTypes.bool,
    rows: PropTypes.string,
    cols: PropTypes.string,
    placement: PropTypes.string,
    labelClass: PropTypes.string,
    labelName: PropTypes.string,
    labelImp: PropTypes.bool,
    showIcon: PropTypes.any,
    maxLength: PropTypes.string,
    defaultChecked: PropTypes.bool,
    icon: PropTypes.oneOf([PropTypes.string, PropTypes.any]),
    suggestions: PropTypes.array,
    onEnter: PropTypes.func
}

InputField.defaultProps = {
  onClick: () => {},
  onListselect: () => {},
  onEnter: () => {},
  autoFocus: false
}

InputField.displayName = 'Input Field';

export default InputField