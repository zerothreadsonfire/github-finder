import { useState } from "react";

const Search = ({searchUsers, setAlert, clearUsers, showClearUsersButton}) => {
    const [text, setText] = useState("");

    const onChangeHandler = (e) => setText(e.target.value);
    
    const onSubmitHandler = (e) => {
        if(text===''){
            setAlert("Please enter something", "light");
        }else{
            searchUsers(text);
            setText("");
        }
        e.preventDefault();
    }

    return(
        <div className="container">
            <form className="form" onSubmit={onSubmitHandler}>
                <input type="text" name="text" value={text} onChange={onChangeHandler} placeholder="Search Users..."/>                    
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                {showClearUsersButton && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </form>
        </div>
    )    
}

export default Search;