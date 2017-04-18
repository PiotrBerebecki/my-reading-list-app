import { FETCH_ARTICLES } from './../constants';


const articles = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload.data;
    default:
      return state;
  }
};


export default articles;
