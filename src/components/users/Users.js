import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    }else{
        return(
            <div style={userStyle} className="container">
                {users.map( user => <UserItem key={user.id} user={user}/>)}
            </div>
        )  
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
}

export default Users;