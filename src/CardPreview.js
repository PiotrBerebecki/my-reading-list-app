import React from 'react';

import './CardPreview.css';


export const CardPreview = (props) => (
  <article className="card">
    <h2 className="card__title">{props.title}</h2>
    <div className="card__image" style={{backgroundImage: `url(${props.image_url})`}} />
    <div className="card__body">{props.body}</div>
  </article>
);
