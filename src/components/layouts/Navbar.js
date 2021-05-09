
const Navbar = (props) => {
    return(
        <div className="navbar bg-primary" >
            <h2><i className={props.icon}></i> {props.title}</h2>
        </div>
    )
}

export default Navbar;