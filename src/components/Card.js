import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { name, url, description, link} = props;
  return (
    <div className='card'>
      <img className='card-img' src={url} alt={name} />
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>Description: {description}</p>  <br/>
        <a href={link} className="btn btn-primary">Go detail</a>
      </div>
    </div>
  );
};