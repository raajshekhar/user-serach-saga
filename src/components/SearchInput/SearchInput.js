import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import InputField from '../InputField';
import { requestSetEditFormIndex } from '../../actions/index';
import './search-input.scss';

const searchFieldProps = {
    "name": "usersearch",
    "id": "usersearch",
    "type": "search",
    "placeholder": "",
    "maxLength": "150",
    "value": "",
    "readOnly": false,
    "colLength": "col-md-6 col-sm-12 col-xs-12",
    "labelName": "Search",
    "restrictions": ["numbers", "left-space", "special-characters"],
    "popOverPlacement": ["bottom", "bottom"],
    "autoComplete": "off",
    "labelImp": false
}

const SearchInput = (props) => {

    const { list, searchFromList, onSelectFromList } = props;
    let timer;
    const [ search, setSearch ] = useState('');

    const suggestions = useMemo(() => list, [list])

    const onChangeHandler = useCallback((e) => {
        const { target : { value } } = e;
        setSearch(value);
        clearTimeout(timer);
        timer = setTimeout(() => searchFromList(value), 500);
    }, []);

    const onClickHandler = useCallback((e) => {
        setSearch('');
        if('No Data Found!' !== e.target.id) onSelectFromList(e)
    }, [onSelectFromList])

    return (
        <div className="search-input-section">
            <InputField {...searchFieldProps} onChange={onChangeHandler} onListselect={onClickHandler} suggestions={suggestions} value={search} />
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({requestSetEditFormIndex}, dispatch)

export default connect(null, mapDispatchToProps)(SearchInput);