import React from 'react';

export const closeIcon = (
    <span className="error-icon">
      <i className="material-icons text-white">close</i>
    </span>
  );
export const checkIcon = (
    <span className="success-icon">
    <i className="material-icons text-white">check</i>
    </span>
);

export const dynamicIcon = (props) => {
  const { icon, className='', id = '' } = {...props}
  return <label htmlFor={id}><span class={`material-icons dynamic-material-icon ${className}`}><i className="material-icons">{icon}</i></span></label>
}