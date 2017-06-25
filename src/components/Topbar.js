import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => (
  <div className="top-bar">
    <div className="top-bar-title">
      <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
        <button className="menu-icon dark" type="button" data-toggle></button>
      </span>
<<<<<<< HEAD
      {' '}<Link to="/"><strong>Musical Ranking</strong></Link>
=======
      {' '}<Link to="/reactriot2017-rankingmusic/" style={{ color: '#000' }}><strong>Musical Ranking</strong></Link>
>>>>>>> gh-pages
    </div>
  </div>
);

export default Topbar;
