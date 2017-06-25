import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => (
  <div className="top-bar">
    <div className="top-bar-title">
      <i className="zmdi zmdi-equalizer zmdi-hc-lg"></i>
      {' '}<Link to="/"><strong>Musical Ranking</strong></Link>
    </div>
  </div>
);

export default Topbar;
