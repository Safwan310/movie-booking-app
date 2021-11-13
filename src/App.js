import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './screens/HomePage';
import MovieDetails from './screens/MovieDetails';
import ProfilePage from './screens/ProfilePage'
import TicketBooking from './screens/TicketBooking';
function App() {
  return (
    <Router>
        <div className="bg-primary">
            <NavBar></NavBar>
            <div className="p-5">
              <Switch>
                  <Route exact path="/">
                      <HomePage/>
                  </Route>
                  <Route exact path="/profile">
                      <ProfilePage/>
                  </Route>
                  <Route exact path="/booking">
                      <TicketBooking/>
                  </Route>
                  <Route exact path="/:id">
                      <MovieDetails/>
                  </Route>
              </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
