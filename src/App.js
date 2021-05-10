import { Component } from 'react';
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  
  state = {
    users: [],
    loading: false,
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
    }))
  }

  render(){
    return(
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    )
  }

}

export default App;
