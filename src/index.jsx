import Post from '@models/Post';
import './styles/styles.css';
import WebPackLogo from '@/assets/webpack-logo.png';
import json from './assets/json.json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import * as $ from 'jquery';
import './babel';
import './styles/less.less';
import './styles/scss.scss';
import React from 'react';
import {render} from 'react-dom';

const post = new Post('Webpack post title', WebPackLogo);
$('pre').addClass('code').html(post.toString());

// console.log('Post to string: ', post.toString());

// console.log(json);
// console.log('XML', xml);
// console.log('CSV', csv);


const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr/>
    <div className="logo"/>
    <hr/>
    <pre/>
    <hr/>

    <div className="box">
      <h2>less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));
