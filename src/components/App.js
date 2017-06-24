import React from 'react';
import Topbar from './Topbar';
import RankingContainer from './ranking/RankingContainer';

const App = () => {
  return (
    <div>
      <Topbar />
      <section role="main">
        <div className="row">
          <div className="medium-4 large-4 columns">
            <RankingContainer />
          </div>
          <div className="medium-8 large-8 columns">
            Center
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
