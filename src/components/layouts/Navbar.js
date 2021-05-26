import {Link} from "react-router-dom";

const Navbar = (props) => {
    return(
        <div className="navbar bg-primary" >
            <h2><i className={props.icon}></i> {props.title}</h2>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;