import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './list.scss';

const List = (props) => {

    const { onSelectedItem, list } = props;

    const openModal = (e) => e.target.tagName === "BUTTON" && onSelectedItem(e.target.id);

    return (
        <section data-testid="list-section" className="list-section" onClick={openModal}>
            { list.map(item => <ListItem key={item.id} {...item} /> )}
        </section>
    );
};

List.propTypes = {
    onSelectedItem: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
}

List.defaultProps = {
    list: [],
    onSelectedItem: () => {}
}

export default List