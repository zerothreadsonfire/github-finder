import { Component } from "react";

class Search extends Component{
    state = {
        text: ""
    }

    onChangeHandler = (e) => this.setState({ ...this.state, [e.target.name]: e.target.value});
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({
            ...this.state,
            text: ""
        });
    }
    
    render(){
        return(
            <div className="container">
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input type="text" name="text" value={this.state.text} onChange={this.onChangeHandler} placeholder="Search Users..."/>                    
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )    
    }
}

export default Search;