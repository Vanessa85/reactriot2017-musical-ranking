import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './Topbar';
import RankingContainer from './ranking/RankingContainer';
import TrackDetailsContainer from './track-details/TrackDetailsContainer';
// import SearchContainer from './search/SearchContainer';
import Home from './Home';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <section role="main">
          <div className="row">
            <div className="medium-5 large-4 columns">
              <RankingContainer />
            </div>
            <div className="medium-7 large-8 columns">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/track" component={TrackDetailsContainer} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
