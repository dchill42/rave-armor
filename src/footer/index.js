import React from 'react';
import ReactDOM from 'react-dom';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='footer__block footer__copy'>
        <span>Site design: dchill42</span>
        <span>&copy; 2020 RaveArmor</span>
      </div>
      <div className='footer__block footer__center'>
        <h4>Contact:</h4>
        <span><a href='mailto:sales@ravearmor.com'>sales@ravearmor.com</a></span>
      </div>
      <div className='footer__block'>
        <h4>Navigate:</h4>
        <ul className='footer__links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/masks/'>Masks</a></li>
          <li><a href='/garments/'>Garments</a></li>
          <li><a href='/about/'>About Us</a></li>
          <li><a href='/account/'>Account</a></li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<Footer />, document.getElementById('footer'));
