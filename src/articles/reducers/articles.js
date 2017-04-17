import { FETCH_ARTICLES } from './../constants';


const defaultState = [
  {
    id: 8,
    slug: 'css-and-javascript',
    tags: ['css', 'javascript'],
    title: 'CSS and JavaScript',
    body: 'CSS and JS ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque nesciunt nobis voluptas. Deserunt optio vero pariatur quidem commodi laudantium dolore eligendi. Aliquam impedit soluta obcaecati aut. Ab, facilis, molestiae.',
    image_url: 'https://www.smashingmagazine.com/wp-content/uploads/2011/10/sm-wp-css-js.jpg'
  },
  {
    id: 9,
    slug: 'css-in-react-with-styled-components',
    tags: ['css', 'react'],
    title: 'CSS in React with Styled Components',
    body: 'Styled Components ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque nesciunt nobis voluptas. Deserunt optio vero pariatur quidem commodi laudantium dolore eligendi. Aliquam impedit soluta obcaecati aut. Ab, facilis, molestiae.',
    image_url: 'https://camo.githubusercontent.com/62d88c898d078e91a7c29bd45636315b02598106/687474703a2f2f696d6775722e636f6d2f6b3768343563332e6a7067'
  },
];


const articles = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return action.payload.data;
    default:
      return state;
  }
};


export default articles;
