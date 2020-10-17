import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
import Title from '../title';
import { TAGLINE, INTRO } from './text';

function Tagline(props) {
  return (
    <div className='home__tagline'>
      <span className='gothic'>{ TAGLINE.en.gothic }</span><br />
      <span className='modern'>{ TAGLINE.en.modern }</span><br />
      { TAGLINE.en.medieval }
    </div>
  );
}

function Gallery({ children }) {
  return (
    <div className='gallery'>
      <div className='gallery__spikes'>
        <div className='gallery__steampunk'>
          <div className='gallery__bloodfeather'>
            <div className='gallery__mask_back'>
              <div className='gallery__purple_rain'>
                { children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <div className='home__content'>
      <h1><Title /></h1>
      <Tagline />
      <Gallery>
        <div className='home__introduction'>{ INTRO.en.map((p, i) => <p key={ i }>{ p }</p>) }</div>
      </Gallery>
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));
