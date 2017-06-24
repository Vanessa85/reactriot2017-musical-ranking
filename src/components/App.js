import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './Topbar';
import Home from './Home';
import RankingContainer from './ranking/RankingContainer';
import TrackDetailsContainer from './track-details/TrackDetailsContainer';

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
                <Route path="/track" component={TrackDetailsContainer} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
