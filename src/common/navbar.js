import React from 'react';
import PropTypes from 'prop-types';

import NavIcon from './navicon';
import './navbar.scss';

function Navbar(props) {
  return (
    <div className='navbar'>
      <NavIcon name='Anvil' title='Home' href='/' selected={ props.selected } />
      <NavIcon name='GuyFawkesMask' title='Masks' href='/masks' selected={ props.selected } />
      <NavIcon name='TshirtCrew' title='Garments' href='/garments' selected={ props.selected } />
      <NavIcon name='Creation' title='About Us' href='/about' selected={ props.selected } />
      <span className='navbar__spacer' />
      <NavIcon name='Sack' title='Shopping Bag' selected={ props.selected } />
      <NavIcon name='ShieldAccount' title='Account' href='/account' selected={ props.selected } />
    </div>
  );
}

Navbar.propTypes = {
  selected: PropTypes.string
};

export default Navbar;
