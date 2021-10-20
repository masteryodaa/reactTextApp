
function Darkmode(props) {

    return (
        <div className="form-check form-switch d-flex justify-content-center my-3 fixed-bottom">
            <input onClick={props.toggle} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
        </div>

    )
}

export default Darkmode
