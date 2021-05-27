import { Component, Fragment } from 'react';
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import Profile from "./components/users/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component {
  
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  }

  searchUsers = async (text) => {
    this.setState( prevState => ({
      ...prevState,
      loading: true
    }));

    const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState( prevState => ({
      ...prevState,
      loading: false,
      users: result.data.items
    }));
  }

  getSingleUser = async (username) => {
    this.setState( prevState => ({
      ...prevState,
      loading: true
    }));

    const result = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState( prevState => ({
      ...prevState,
      loading: false,
      user: result.data
    }));
  }

  getUserRepos = async username => {
    this.setState( prevState => ({
      ...prevState,
      loading: true
    }));

    const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState( prevState => ({
      ...prevState,
      loading: false,
      repos: result.data
    }));
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false 
    });
  }

  setAlert = (msg, type) => {
    this.setState({
      ...this.state,
      alert: {
        msg: msg,
        type: type
      }
    });

    setTimeout(()=> this.setState({
      ...this.state,
      alert: null
    }), 3000);
    
  }

  render(){
    const {users, loading, alert, repos, user} = this.state;

    return(
      <BrowserRouter>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github"/>
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render = {props => (
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearUsersButton={users.length>0?true:false} setAlert={this.setAlert}/>
                <Users loading={loading} users={users}/>
              </Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={ props => (
              <Profile getUser={this.getSingleUser} user={user} loading={loading} {...props} getRepos={this.getUserRepos} repos={repos}/>
            )}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
