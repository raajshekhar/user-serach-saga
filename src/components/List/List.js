import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './list.scss';

const List = (props) => {

    const { onClick, list } = props;

    const openModal = (e) => e.target.tagName === "BUTTON" && onClick(e.target.id);

    useEffect(() => {
        const listSectionElem = document.querySelector('.list-section');
        listSectionElem && listSectionElem.addEventListener('click', openModal);
        return () => listSectionElem && listSectionElem.removeEventListener('click', openModal);
    }, [])

    return (
        <section className="list-section">
            { list.map(item => <ListItem key={item.id} item={item} /> )}
        </section>
    );
};

List.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default List