import Post from './Post';
import './styles/styles.css';
import json from './assets/json';
import WebPackLogo from './assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const post = new Post('Webpack post title', WebPackLogo);

console.log('Post to string: ', post.toString());
console.log(json);
console.log('XML', xml);
console.log('CSV', csv);
