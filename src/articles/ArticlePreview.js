import React from 'react';

import './ArticlePreview.css';


const ArticlePreview = ({author_avatar_url, author_display_name, date_posted, reading_time, image_url, title, body_text}) => (
  <div className="preview">
    <header className="preview-header">
      <img className="preview-header__author-avatar" src={author_avatar_url} alt="authors profile" />
      <div className="preview-header__article-info">
        <p className="preview-header__author-display-name">{author_display_name}</p>
        <p className="preview-header__additional-info">
          <span className="preview-header__date-posted">{date_posted}</span>
          <span className="preview-header__mid-diviter" />
          <span className="preview-header__reading-time">{reading_time} read</span>
        </p>
      </div>
    </header>
    <div className="preview__image" style={{backgroundImage: `url(${image_url})`}} />
    <h2 className="preview__title">{title}</h2>
    <div className="preview__body">{body_text}</div>
  </div>
);


export default ArticlePreview;
