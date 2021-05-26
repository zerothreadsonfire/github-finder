
const Navbar = (props) => {
    return(
        <div className="navbar bg-primary" >
            <h2><i className={props.icon}></i> {props.title}</h2>
            <ul>
                <li><a href="/"> Home</a></li>
                <li><a href="/about"> About</a></li>
            </ul>
        </div>
    )
}

export default Navbar;