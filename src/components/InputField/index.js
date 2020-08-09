import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputFieldLabel from './types/input-label';
import { dynamicIcon } from './types/icons';
import InputFieldPopover from './types/pop-over';
import SearchResultsComponent from './types/SearchResults';
import { customOnKeyPress } from '../../assests/Js/commonFunction';
import './input-field.scss';

const InputField = (props) => {

    const { name, type, id, value, className, autoComplete, onChange, onListselect, onKeyPress, onKeyDown, onBlur, onKeyUp, placeholder } = props;
    const { maxLength, readOnly, defaultChecked, restrictions, icon, rows, cols, ...popoverProps } = props;

    const { touched, errorMsg, labelClass, labelName, labelImp, showIcon } = popoverProps

    let inputFields = { name, type, id, value, onKeyPress, onBlur, onChange, onKeyDown, className, onKeyUp, placeholder, autoComplete, maxLength, rows, cols, readOnly, defaultChecked };

    const popoverData = { className:  `${errorMsg ? 'error' : 'success'}-message`, color: errorMsg ? 'green' : 'red' , errorMsg };
    const labelData = { id, labelClass: `${labelClass} ml-4`, labelName, labelImp };

    // const SearchResults = type === 'search' && props.suggestions.length;
    let suggestions = props.suggestions || [];
    if(value) suggestions = ( type === 'search' && suggestions.length ) ? suggestions : [{ title: 'No Data Found!', id: 'No Data Found!'}];

    useEffect(() => {
      if(type === 'search') {
        const searchResults = document.querySelector(`.custom-${type}-field .search-result`);
        const hasClass = searchResults && searchResults.classList.contains('added-listener');
        searchResults && !hasClass && searchResults.addEventListener('click', onListselect);
        searchResults && searchResults.classList.add('added-listener');
        return () => searchResults && hasClass && searchResults.removeEventListener('click', onListselect);
      }
    }, [type, onListselect])

    return (
        <div className={`custom-input-validation custom-${type}-field`}>
          {(labelName && type !== 'checkbox') && <InputFieldLabel {...labelData} /> }
          <div className={`position-relative ${icon ? 'has-icon': ''}`}>
              <input {...inputFields} onChange={onChange} onKeyPress={(e)=>{customOnKeyPress(e, restrictions, () => {})}}  />
              {(type==='checkbox') && <InputFieldLabel {...labelData} />}
              <div className={`search-result ${suggestions.length ? '' : 'd-none'}`}>{suggestions.length ? <SearchResultsComponent list={suggestions} /> : null}</div>
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
    suggestions: PropTypes.array
}

InputField.defaultProps = {
  onClick: (e) => {},
  onListselect: (e) => {}
}

InputField.displayName = 'Input Field';

export default InputField