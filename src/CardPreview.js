import React from 'react';

import './CardPreview.css';


export const CardPreview = (props) => (
  <article className="card">
    <header className="header">
      <img className="header__author-avatar" src={props.author_avatar_url} alt="authors profile"/>
      <div className="header__article-info">
        <p className="header__author-display-name">{props.author_display_name}</p>
        <p className="header__additional-info">
          <span className="header__date-posted">{props.date_posted}</span>
          <span className="header__mid-diviter"></span>
          <span className="reading-time">{props.reading_time} 5 min read</span>
        </p>
      </div>
    </header>
    <div className="card__image" style={{backgroundImage: `url(${props.image_url})`}} />
    <h2 className="card__title">{props.title}</h2>
    <div className="card__body">{props.body}</div>
  </article>
);
