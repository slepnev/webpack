import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json.json';
import WebPackLogo from '@/assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import * as $ from 'jquery';

const post = new Post('Webpack post title', WebPackLogo);

$('pre').addClass('code').html(post.toString());

// console.log('Post to string: ', post.toString());

// console.log(json);
// console.log('XML', xml);
// console.log('CSV', csv);
