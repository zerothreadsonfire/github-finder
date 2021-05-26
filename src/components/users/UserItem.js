import {Link} from "react-router-dom";

const UserItem = (props) => {
    const {avatar_url, login, html_for} = props.user;

    return(
        <div className="card text-center">
            <img alt={login} src={avatar_url} className="round-img" style={{width: "100px"}}/>
            <h3 className="text-center">{login}</h3>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )
}

export default UserItem;