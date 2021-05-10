import { Component } from 'react';
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from "./components/layouts/Alert";

class App extends Component {
  
  state = {
    users: [],
    loading: false,
    alert: null
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
    }), 1000);
    
  }

  render(){
    const {users, loading, alert} = this.state;

    return(
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <Alert alert={alert} />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearUsersButton={users.length>0?true:false} setAlert={this.setAlert}/>
        <Users loading={loading} users={users}/>
      </div>
    )
  }

}

export default App;
