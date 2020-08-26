import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error404 from './Components/Error404/Error404';
import './index.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
