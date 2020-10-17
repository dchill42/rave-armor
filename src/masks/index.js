import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

function Masks(params) {
  return (
    <div className='masks__content'>
      <h1>Masks</h1>
      <h2>Coming soon</h2>
    </div>
  );
}

ReactDOM.render(<Masks />, document.getElementById('root'));
