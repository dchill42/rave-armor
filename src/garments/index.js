import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

function Garments(props) {
  return (
    <div className='garments__content'>
      <h1>Garments</h1>
      <h2>Coming soon</h2>
    </div>
  );
}

ReactDOM.render(<Garments />, document.getElementById('root'));
