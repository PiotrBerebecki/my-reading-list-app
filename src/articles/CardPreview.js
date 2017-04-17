import React from 'react';

import './CardPreview.css';


export const CardPreview = ({author_avatar_url, author_display_name, date_posted, reading_time, image_url, title, body}) => (
  <article className="card">
    <header className="header">
      <img className="header__author-avatar" src={author_avatar_url} alt="authors profile" />
      <div className="header__article-info">
        <p className="header__author-display-name">{author_display_name}</p>
        <p className="header__additional-info">
          <span className="header__date-posted">{date_posted}</span>
          <span className="header__mid-diviter" />
          <span className="reading-time">{reading_time} read</span>
        </p>
      </div>
    </header>
    <div className="card__image" style={{backgroundImage: `url(${image_url})`}} />
    <h2 className="card__title">{title}</h2>
    <div className="card__body">{body}</div>
  </article>
);
