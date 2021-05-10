const Alert = (props) => {
    const {alert} = props;


    return(
        <div className="container">
            {alert!==null && <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/>{alert.msg}
            </div>}
        </div>
    )
}

export default Alert;