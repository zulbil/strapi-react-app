import './App.scss';
import { Route, Switch } from 'react-router-dom';
import JournalistsPage from './pages/JournalistsPage';
import AgenciesPage from './pages/AgenciesPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/journalists'>
            <JournalistsPage />
          </Route>
          <Route path='/agencies'>
            <AgenciesPage />
          </Route>
      </Switch>
    </>
  );
}

export default App;
