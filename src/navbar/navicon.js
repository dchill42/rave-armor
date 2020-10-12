import React from 'react';
import PropTypes from 'prop-types';
import Cnames from 'classnames';
import Icon from '@mdi/react';
import * as Mdi from '@mdi/js';

import Title from '../title';

function NavIcon(props) {
  const classes = Cnames('navbar__icon', { 'navbar__icon-selected': props.href === props.selected });

  return (
    <a href={ props.href }>
      <span className={ classes } title={ props.title } >
        <Icon path={ Mdi[`mdi${props.name}`] } />
        { props.title === 'Home' && <span className='navbar__title' ><Title /></span> }
      </span>
    </a>
  );
}

NavIcon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavIcon;
