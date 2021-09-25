import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import ValidateEmail from './pages/validate-email';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Sign in</Link>
        <Switch>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/validate-mail">
            <ValidateEmail></ValidateEmail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
