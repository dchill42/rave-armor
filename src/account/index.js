import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

function Account(props) {
  return (
    <div className='account__content'>
      <h1>Account</h1>
      <h2>Coming soon</h2>
    </div>
  );
}

ReactDOM.render(<Account />, document.getElementById('root'));
