import UserItem from "./UserItem";

const Users = (props) => {
    return(
        <div style={userStyle} className="container">
            {props.users.map( user => <UserItem key={user.id} user={user}/>)}
        </div>
    )  
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
}

export default Users;