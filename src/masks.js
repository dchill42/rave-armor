import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './common/navbar';
import './masks.scss';

ReactDOM.render(
  (<div className='masks__content'>
    <Navbar selected='/masks' />
    <h1>Masks</h1>
  </div>),
  document.getElementById('root')
);
