import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './common/navbar';
import './home.scss';
import Title from './common/title';

ReactDOM.render(
  (<div className='home__content'>
    <Navbar selected='/' />
    <h1>Welcome to <Title />!</h1>
  </div>),
  document.getElementById('root')
);
