import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchArticles } from './actions';
import { CardPreview } from './CardPreview';


class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchArticles(this.props.tag);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tag !== this.props.tag) {
      this.props.fetchArticles(newProps.tag);
    }
  }

  render() {
    const renderCardPreviews = this.props.articles.map((article, idx) => {
      return <CardPreview key={idx} {...article} />;
    });

    return (
      <main className="main">
        {renderCardPreviews}
      </main>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchArticles}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
