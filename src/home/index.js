import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import Title from '../title';

ReactDOM.render(
  (<div className='home__content'>
    <h1><Title /></h1>
    <div className='home__tagline'>
      <span className='gothic'>Gothic Gear with</span><br />
      <span className='modern'>Modern Materials</span><br />
      and Medieval Methods
    </div>
    <div className='gallery'>
      <div className='gallery__spikes'>
        <div className='gallery__mask_back'>
          <div className='gallery__purple_rain'>
            <div className='home__introduction'>
              Browse our selection of masks and garments.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>),
  document.getElementById('root')
);
