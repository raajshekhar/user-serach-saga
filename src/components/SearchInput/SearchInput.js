import React, { useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import InputField from '../InputField';
import { setEditFormIndex } from '../../actions/index';
import { requestUpdateUIList } from '../../actions/usersearch';
import './search-input.scss';

/* 
    Search Input Handles the Autocomplete Functionality
    Search the title from the Autocomplete list and can select from the list by clicking
    On Enter it will search and render the resulted list
*/

/*
    useCallback: Maintain the reference equality between the renders
    useMemo: Cache the result and update according to dependency changes
    useState: Manage the state of the component and update with function (Able to get the previous state with passing callback function) 
*/

const SearchInput = (props) => {

    const { list, searchFromList, onSelectFromList, requestUpdateUIList } = props;
    let timer;

    const [ search, setSearch ] = useState('');

    const suggestions = useMemo(() => list, [list])

     /*
     * onChangeHandler function is filter the data in local store according to the user input
     * then updates the state [list]
     */
    const onChangeHandler = useCallback((e) => {
        const { target : { value } } = e;
        setSearch(value);
        clearTimeout(timer);
        timer = setTimeout(() => searchFromList(value), 500);
    }, []);

    /*
     * onClickHandler function is filter the data in local store according to the user select from the autocomplete
     * then updates the UI List
     */
    const onClickHandler = useCallback((e) => {
        setSearch('');
        if('No Data Found!' !== e.target.id) onSelectFromList(e)
    }, [onSelectFromList])

    const onEnterHandler = useCallback((e) => {
        setSearch('');
        e.target.value && requestUpdateUIList(e.target.value)
    })

    return <InputField {...searchFieldProps} onChange={onChangeHandler} onEnter={onEnterHandler} onListselect={onClickHandler} suggestions={suggestions} value={search} />

}

const mapDispatchToProps = dispatch => bindActionCreators({requestUpdateUIList, setEditFormIndex}, dispatch)

export default connect(null, mapDispatchToProps)(SearchInput);

const searchFieldProps = {
    name: "usersearch",
    id: "usersearch",
    type: "search",
    placeholder: "Search here",
    maxLength: "150",
    value: "",
    readOnly: false,
    colLength: "col-md-6 col-sm-12 col-xs-12",
    labelName: "Search",
    restrictions: ["numbers", "left-space", "special-characters"],
    popOverPlacement: ["bottom", "bottom"],
    autoComplete: "off",
    labelImp: false,
    autoFocus: true
}