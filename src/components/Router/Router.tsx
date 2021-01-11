import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'views/Home';
import Profile from 'views/Profile';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
