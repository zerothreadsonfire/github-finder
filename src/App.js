import { Fragment, useState } from 'react';
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import Profile from "./components/users/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const searchUsers = async (text) => {
    setLoading(true);

    const result = await axios.get(`https://api.github.com/search/users?q=${text}`);
    
    setLoading(false);
    setUsers(result.data.items);
  }

  const getSingleUser = async (username) => {
    setLoading(true);

    const result = await axios.get(`https://api.github.com/users/${username}`);
    
    setLoading(false);
    setUser(result.data);
  }

  const getUserRepos = async username => {
    setLoading(true);

    const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    
    setLoading(false);
    setRepos(result.data);
  }

  const clearUsers = () => {
    setLoading(false);
    setUsers([])
  }

  const setUserAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(()=> setAlert(null), 3000);
  }

  return(
    <BrowserRouter>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/" render = {props => (
            <Fragment>
              <Search searchUsers={searchUsers} clearUsers={clearUsers} showClearUsersButton={users.length>0?true:false} setAlert={setUserAlert}/>
              <Users loading={loading} users={users}/>
            </Fragment>
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/user/:login" render={ props => (
            <Profile getUser={getSingleUser} user={user} loading={loading} {...props} getRepos={getUserRepos} repos={repos}/>
          )}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
