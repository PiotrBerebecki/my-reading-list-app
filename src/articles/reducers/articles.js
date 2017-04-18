import { FETCH_ARTICLES } from './../constants';


const articles = (state = '', action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      if (action.payload.data) { return action.payload.data; }
      return state;
    default:
      return state;
  }
};


export default articles;
