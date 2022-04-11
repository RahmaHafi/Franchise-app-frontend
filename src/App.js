import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import GlobalLoading from './components/GlobalLoading';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import {login} from './redux/actionsCreators/userActionCreators'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';



function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user')) 
  if (token && user){
    dispatch(login(user,token))
  }

  return (
    <>
    <GlobalLoading />
   
      <Router>
        <div className="App">
          <Switch>
            <PublicRoute exact path='/' component={Home} />
            <PublicRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
