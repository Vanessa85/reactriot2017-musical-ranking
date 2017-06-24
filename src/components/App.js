import React from 'react';
import Topbar from './Topbar';
import RankingContainer from './ranking/RankingContainer';

const App = () => {
  return (
    <div>
      <Topbar />
      <section role="main">
        <div className="row">
          <div className="medium-5 large-5 columns">
            <RankingContainer />
          </div>
          <div className="medium-7 large-7 columns">
            Center
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
