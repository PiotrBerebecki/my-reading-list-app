import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchArticles } from './actions';
import { Card } from './Card';
import { ArticlePreview } from './ArticlePreview';
import { Error } from './Error';


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
    let renderArticles;
    console.log('===== this.props.articles', this.props.articles);
    if (this.props.articles.error) {
      renderArticles = (
        <Card>
          <Error error={this.props.articles.error} />
        </Card>
      );
    } else {
      renderArticles = this.props.articles.map((article, idx) => {
        return (
          <Card key={idx}>
            <ArticlePreview  {...article} />
          </Card>
        );
      });
    }

    return (
      <main className="main">
        {renderArticles}
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
