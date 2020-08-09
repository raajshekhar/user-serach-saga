import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SearchInput from './components/SearchInput/SearchInput';
import Modal from './components/Modal/Modal';
import UserEditForm from './components/UserEditForm'
import List from './components/List/List';
import { fetchApiRequest } from './actions/getuserlist';
import { requestResetEditFormIndex, requestSetEditFormIndex, requestToUpdateUserData, requestFilterFromList, filterListForMainList, resetFilterList , resetFilterListForMainList} from './actions'
import { getSelectedIndexData, getFilterList, getUIList, getUserError, getLoaderStatus } from './reducers/commonReducer'
import MessageComponent from './components/MessageComponent/MessageComponent';
import './App.scss';

function App(props) {

  const { getLoaderStatus, getUserError, selectedIndexData, getFilterList, requestFilterFromList, filterListForMainList, resetFilterList, getUIList, resetFilterListForMainList } = props;
  const { fetchApiRequest } = props;

  useEffect(() => { fetchApiRequest() }, [])

  const onClickHandler = useCallback((id) => props.requestSetEditFormIndex(id), [])

  const closeModal = useCallback(() => props.requestResetEditFormIndex(), [])

  const updateUserData = useCallback((data) => props.requestToUpdateUserData(data), []);

  const onSelectedListItemFromSearch = useCallback((e) => {
    const { target: { id }} = e;
    filterListForMainList(id);
    resetFilterList();
  }, []);

  if(getUserError || getLoaderStatus) return <Modal title='Status'><MessageComponent icon={getUserError ? 'error' : 'api'} message={getUserError ? getUserError : 'Fetching List'} /></Modal>
  return (
    <div className="App">
      <section className="app-auto-complete">
        <SearchInput list={getFilterList} searchFromList={requestFilterFromList} onSelectFromList={onSelectedListItemFromSearch} />
        <div className="filter-results-section">
          <div className="reset-button-section">{ getUIList.length === 1 ? <button type="button" onClick={resetFilterListForMainList}>Reset</button> :  null }</div>
          <div className="list-count">List Count: {getUIList.length} </div>
        </div>        
        <article className="app-list">
          <List onClick={onClickHandler} list={getUIList}/>
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

const mapDispatchToProps = dispatch => bindActionCreators({filterListForMainList, fetchApiRequest, resetFilterListForMainList, requestResetEditFormIndex, filterListForMainList, requestSetEditFormIndex, resetFilterList, requestToUpdateUserData, requestFilterFromList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
