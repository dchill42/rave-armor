import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './common/navbar';
import './about.scss';

ReactDOM.render(
  (<div className='about__content'>
    <Navbar selected='/about' />
    <h1>About Us</h1>
  </div>),
  document.getElementById('root')
);
