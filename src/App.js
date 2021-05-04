import { Route, Switch } from 'react-router-dom';
import Allmeetups from './pages/Allmeetups';
import Fav from './pages/Fav';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <>
      <MainNavigation/>
      <Switch>
      <Route path='/' exact>
        <Allmeetups />
      </Route>
      <Route path='/Fav'>
        <Fav/>
      </Route>
      <Route path='/NewMeetup'>
        <NewMeetup />
      </Route>
      </Switch>
    </>
  );
}

export default App;
