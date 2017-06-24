import React from 'react';

const Topbar = () => (
  <div className="top-bar">
    <div className="top-bar-title">
      <span data-responsive-toggle="responsive-menu" data-hide-for="medium">
        <button className="menu-icon dark" type="button" data-toggle></button>
      </span>
      {' '}<strong>Musical Ranking</strong>
    </div>
  </div>
);

export default Topbar;
