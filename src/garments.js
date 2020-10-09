import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './common/navbar';
import './garments.scss';

ReactDOM.render(
  (<div className='garments__content'>
    <Navbar selected='/garments' />
    <h1>Garments</h1>
  </div>),
  document.getElementById('root')
);
