import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({id, title, body}) => (
            <article data-testid="list-item-wrapper">
                <div className="list-user-details">
                    <div className="list-user-id">
                        {id}
                    </div>
                    <div className="user-information">
                        <div><span>Title:</span> {title}</div>
                        <div><span>Body:</span> {body}</div>
                    </div>
                </div>
                <button type="button" className="list-user-edit" id={id}>
                    Edit
                </button>
            </article>
        );

ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default React.memo(ListItem);