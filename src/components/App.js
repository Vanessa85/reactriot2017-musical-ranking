import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Topbar from './Topbar';
import Home from './Home';
import RankingContainer from './ranking/RankingContainer';
import TrackDetails from './track-details/TrackDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <section role="main">
          <div className="row">
            <div className="medium-5 large-5 columns">
              <RankingContainer />
            </div>
            <div className="medium-7 large-7 columns">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:id" component={TrackDetails} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
