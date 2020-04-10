import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import React, { FC } from 'react';
import { render } from 'react-dom';


const App: FC = () => (
  <div className="container">
    <h1>Typescript React</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />

    <div className="box">
      <h2>less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app2'));
