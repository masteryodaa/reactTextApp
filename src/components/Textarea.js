import { useState } from "react";

function Textarea(props) {

    const [text, setText] = useState('');

    const changetext = (event) => {
        setText(event.target.value);
    };

    const toUp = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.alert('Converted to Uppercase.', 'danger');
    };

    const capitalize = ()=>{
        let newtext = text.toLowerCase().split(' ').map(
            word => word.charAt(0).toUpperCase()+word.substr(1))
            .join(' ');
            setText(newtext);
            props.alert('Capitalized all the First letters.','success');
        }

    return (
        <div className="row d-flex flex-column align-items-center my-5">
            <div className="form-floating col-6">
                <textarea
                    className={`bg-${props.mode} text-${props.mode==='dark'?'white':'black'} form-control`}
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    onChange={changetext}
                    value={text}
                ></textarea>
                <label className={`text-${props.mode==='dark'?'white':'black'}`} htmlFor="floatingTextarea2">Enter text to convert</label>

                <button onClick={toUp} className="btn btn-danger my-5 me-3">
                    convert to Uppercase
                </button>

                <button onClick={capitalize} className="btn btn-danger">
                    Capitalize first letter
                </button>

                <h2>text summary</h2>
                <h6>
                    {text?text.split(' ').length:0} words and {text.length} characters.
                </h6>
            </div>
        </div>
    );
}

export default Textarea;
