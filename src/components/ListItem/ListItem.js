import React from 'react';

const ListItem = ({item}) => (
            <article>
                <div className="list-user-details">
                    <div className="list-user-id">
                        {item.id}
                    </div>
                    <div className="user-information">
                        <div><span>Title:</span> {item.title}</div>
                        <div><span>Body:</span> {item.body}</div>
                    </div>
                </div>
                <button type="button" className="list-user-edit" id={item.id}>
                    Edit
                </button>
            </article>
        );

export default React.memo(ListItem);