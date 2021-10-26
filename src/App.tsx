import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Title from './styles/Title';
import Heroes from './components/heroes/Heroes';
import HeroDetail from './components/hero-detail/HeroDetail';
import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import { storeTypes } from './store/configureStore';
import { setTitle } from './actions/titleAction';

function App() {
  const title = useSelector((state: storeTypes) => state.titleReducer.title);
  const dispatch = useDispatch();
  setTimeout(() => dispatch(setTitle('React Tour of Hero')), 1000);

  return (
    <Fragment>
      <Router>
        <Title>{title}</Title>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/heroes">Heros</Link>
        </nav>
        <Switch>
          <Route path='/dashboard' render={() => <Dashboard />} />
          <Route path='/detail/:id' render={props => <HeroDetail {...props} />} />
          <Route path='/heroes' render={() => <Heroes />} />
          <Redirect from='/' to='/dashboard' />
        </Switch>
      </Router>
      <Messages />
    </Fragment>
  );
}

export default App;
