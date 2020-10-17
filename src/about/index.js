import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import { ABOUT } from './text';

function About(params) {
  return (
    <div className='about__content'>
      <h1>About Us</h1>
      <div className='about__bg'>
        <div className='about__info'>{ ABOUT.en.map((p, i) => <p key={ i }>{ p }</p>) }</div>
      </div>
    </div>
  );
}

ReactDOM.render(<About />, document.getElementById('root'));
