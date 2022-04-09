import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalLoading from './components/GlobalLoading';
import Home from './pages/Home';
import Login from './pages/Login';



function App() {
  return (
    <>
    <GlobalLoading />
   
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router >
    </>
  );
}

export default App;
