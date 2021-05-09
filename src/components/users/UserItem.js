const UserItem = (props) => {
    const {avatar_url, login, html_for} = props.user;
    return(
        <div className="card text-center">
            <img src={avatar_url} className="round-img"/>
            <h3 className="text-center">{login}</h3>
            <a href={html_for} className="btn btn-dark btn-sm my-1">More</a>
        </div>
    )
}

export default UserItem;