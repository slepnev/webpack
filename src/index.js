import Post from './Post';
import './styles/styles.css';
import json from './assets/json';
import WebPackLogo from './assets/webpack-logo.png';

const post = new Post('Webpack post title', WebPackLogo);

console.log('Post to string: ', post.toString());
console.log(json);
