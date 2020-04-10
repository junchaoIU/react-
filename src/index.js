import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App';

ReactDOM.render(
  <React.StrictMode>
    <Game />  {/*渲染Game组件，生成Dom_root*/}
  </React.StrictMode>,
  document.getElementById('root')
);


