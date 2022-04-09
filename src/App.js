import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalLoading from './components/GlobalLoading';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import {login} from './redux/actionsCreators/userActionCreators'



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
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
