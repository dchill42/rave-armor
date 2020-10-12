import React from 'react';
import ReactDOM from 'react-dom';

import NavIcon from './navicon';

function Navbar(props) {
  const selected = window.location.pathname;

  return (
    <div className='navbar'>
      <NavIcon name='Anvil' title='Home' href='/' selected={ selected } />
      <NavIcon name='GuyFawkesMask' title='Masks' href='/masks/' selected={ selected } />
      <NavIcon name='TshirtCrew' title='Garments' href='/garments/' selected={ selected } />
      <NavIcon name='Creation' title='About Us' href='/about/' selected={ selected } />
      <span className='navbar__spacer' />
      <NavIcon name='Sack' title='Shopping Bag' selected={ selected } />
      <NavIcon name='ShieldAccount' title='Account' href='/account/' selected={ selected } />
    </div>
  );
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);
