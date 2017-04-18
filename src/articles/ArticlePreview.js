import React from 'react';

import './ArticlePreview.css';


export const ArticlePreview = ({author_avatar_url, author_display_name, date_posted, reading_time, image_url, title, body_text}) => (
  <div className="article-preview">
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
    <div className="article-preview__image" style={{backgroundImage: `url(${image_url})`}} />
    <h2 className="article-preview__title">{title}</h2>
    <div className="article-preview__body">{body_text}</div>
  </div>
);
