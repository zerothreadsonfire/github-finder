import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

class Profile extends Component{

    componentDidMount(){
        const username = this.props.match.params.login;
        this.props.getUser(username);
    }

    render(){
        const {
            name, 
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_for,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user

        const {loading} = this.props;

        if(loading===true) return <Spinner />;
        else {
            return(
                <div className="container"> 
                    <Link to="/" className="btn btn-light">Back to Search</Link>
                    Hireable {' '} {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} alt="" className="round-img" style={{width: "200px"}} />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            {bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>}

                            <a href={html_for} className="btn btn-dark my-1" >Visit Github Profile</a>

                            <ul>
                                <li>{login && <Fragment>
                                    <strong>Username: </strong>{login}
                                    </Fragment>}
                                </li>
                                <li>{company && <Fragment>
                                    <strong>Company: </strong>{company}
                                    </Fragment>}
                                </li>
                                <li>{blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-light">Public Repos: {public_repos}</div>
                        <div className="badge badge-dark">Public Gists: {public_gists}</div>
                    </div>
                </div>
            )
        }
    }

}

export default Profile;