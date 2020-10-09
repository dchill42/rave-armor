import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './common/navbar';
import './account.scss';

ReactDOM.render(
  (<div className='account__content'>
    <Navbar selected='/account' />
    <h1>Account</h1>
  </div>),
  document.getElementById('root')
);
