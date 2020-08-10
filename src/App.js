import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SearchInput from './components/SearchInput/SearchInput';
import Modal from './components/Modal/Modal';
import UserEditForm from './components/UserEditForm'
import List from './components/List/List';
import { fetchApiRequest } from './actions/getuserlist';
import { resetEditFormIndex, setEditFormIndex, updateUserData, filterFromList, filterListForMainList, resetFilterList , resetFilterListForMainList} from './actions'
import { getSelectedIndexData, getFilterList, getUIList, getUserError, getLoaderStatus } from './reducers/commonReducer'
import MessageComponent from './components/MessageComponent/MessageComponent';
import './App.scss';

function App(props) {

  const { getLoaderStatus, getUserError, selectedIndexData, getFilterList, filterFromList,
     filterListForMainList, resetFilterList, getUIList } = props;
  
  const { fetchApiRequest, updateUserData } = props;

  useEffect(() => { fetchApiRequest() }, [])

  const onClickHandler = useCallback((id) => props.setEditFormIndex({ index: id}), [])

  const closeModal = useCallback(() => props.resetEditFormIndex(), [])

  const filterReset = useCallback(() => props.resetFilterListForMainList(), [])

  const onSelectedListItemFromSearch = useCallback((e) => {
    const { target: { id }} = e;
    filterListForMainList(id);
    resetFilterList();
  }, []);

  if(getUserError || getLoaderStatus) return <Modal title='Status'><MessageComponent icon={getUserError ? 'error' : 'api'} message={getUserError ? getUserError : 'Fetching List'} /></Modal>
  return (
    <div className="App">
      <section className="app-auto-complete">
        <SearchInput list={getFilterList} searchFromList={filterFromList} onSelectFromList={onSelectedListItemFromSearch} />
        <div className="filter-results-section">
          <div className="reset-button-section">{ getUIList.length === 1 ? <button type="button" onClick={filterReset}>Reset</button> :  null }</div>
          <div className="list-count">List Count: {getUIList.length} </div>
        </div>        
        <article className="app-list">
          <List onSelectedItem={onClickHandler} list={getUIList}/>
        </article>
      </section>
      { selectedIndexData ? <Modal title='Edit Form' onClick={closeModal}><div><UserEditForm data={selectedIndexData} onClick={updateUserData} /></div></Modal> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    selectedIndexData: getSelectedIndexData(state),
    getFilterList: getFilterList(state),
    getUIList: getUIList(state),
    getUserError: getUserError(state),
    getLoaderStatus: getLoaderStatus(state)
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
    filterListForMainList,
    fetchApiRequest,
    resetFilterListForMainList,
    resetEditFormIndex,
    filterListForMainList,
    setEditFormIndex,
    resetFilterList,
    updateUserData,
    filterFromList
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
