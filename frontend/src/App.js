import './App.scss';
import {Switch } from 'react-router-dom';
import JournalistsPage from './pages/JournalistsPage';
import AgenciesPage from './pages/AgenciesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AuthenticationLayout from './layout/AuthenticationLayout';
import WithNavbarLayout from './layout/WithNavbarLayout';

function App() {
  return (
    <>
      <Switch>
          <AuthenticationLayout exact path="/register" component={RegisterPage} />
          <AuthenticationLayout exact path="/login" component={LoginPage} />
          <WithNavbarLayout exact path="/" component={HomePage} />
          <WithNavbarLayout exact path="/journalists" component={JournalistsPage} />
          <WithNavbarLayout exact path="/outlets" component={AgenciesPage} />
      </Switch>
    </>
  );
}

export default App;
