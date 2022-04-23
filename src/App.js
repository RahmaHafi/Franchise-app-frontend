import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import GlobalLoading from './components/GlobalLoading';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import {login} from './redux/actionsCreators/userActionCreators'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import CustomRoute from './routes/CustomRoute';
import CreateFranchise from './pages/CreateFranchise';
import UpdateFranchis from './pages/UpdateFranchise';
import FranchiseDetails from './pages/FranchiseDetails';
import MessageDetails from './components/MessageDetails';
import JobForm from './components/JobForm';



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
            <PrivateRoute exact path='/create-franchise' component={CreateFranchise} />   
            <PrivateRoute exact path='/update-franchise/:id' component={UpdateFranchis} />   
            <PrivateRoute exact path='/message' component={MessageDetails} />   
            <PrivateRoute exact path='/add-job' component={JobForm} />   
            <CustomRoute path='/franchises/:id' component={FranchiseDetails} />                 
            <CustomRoute  component={NotFound} />                    
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
