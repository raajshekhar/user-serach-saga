import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
    const { list } = props;
    const isValidArray = Array.isArray(list);
    if(!isValidArray || (isValidArray && !list.length)) return null;
    return <>{ list.map(listItem => <ResultItem key={listItem.id + listItem.title} item={listItem} />) }</>
};

SearchResults.displayName = 'Search Results Component';

SearchResults.propTypes = {
    list: PropTypes.array.isRequired
}

export default SearchResults;

const ResultItem = memo((props) => {
    const { item } = props;
    return (
        <div id={`${item.id}`}>{item.title}</div>
    )
});

ResultItem.protoTypes = {
    item: PropTypes.object.isRequired
}
