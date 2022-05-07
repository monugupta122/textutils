import React, { useState } from 'react'
// import PrimaryBtn from './PrimaryBtn'

export default function TextForm(props) {

    const [text, setText] = useState("");
    // console.log(text);
    const upClick = () => {
        setText(text.toUpperCase());
    };

    const lowClick = () => {
        setText(text.toLowerCase());
    };

    const removeSpace = () => {
        let txt = text.split(/[ ]+/);
        setText(txt.join(" "));
    };

    const clear = () => {
        setText("");
    };

    const copy = () => {
        let txt = document.getElementById('myText');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    };

    const onChangeTxt = (event) => {
        setText(event.target.value);
    };

    const lightMode = {
        color: '#343a40',
        backgroundColor: 'white'
    };
    const darkMode = {
        color: 'white',
        backgroundColor: '#343a40'
    };

    // if (props.mode === 'dark') {
    //     // console.log("if")
    //     myStyle = {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     };
    // }
    // else {
    //     // console.log("else")
    //     myStyle = {  
    //         color: 'white',
    //         backgroundColor: 'black'
    //     };    
    // }

    return (
        <>
            <div className='container'>
                <h1 className="my-4">Enter text to analyse</h1>
                <div className="my-3">
                    <textarea style={props.mode === 'dark' ? darkMode : lightMode} className="form-control" onChange={onChangeTxt} placeholder="Enter your text here" value={text} id="myText" rows="8" />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 col-sm my-2"><button className="btn btn-primary mx-1" onClick={upClick}>Upper Case</button></div>
                        <div class="col-4 col-sm my-2"><button className="btn btn-primary mx-1" onClick={lowClick}>Lower Case</button></div>
                        <div class="col-4 col-sm my-2"><button className="btn btn-primary mx-1" onClick={copy}>Copy text</button></div>
                        <div class="col-4 col-sm my-2"><button className="btn btn-primary mx-1" onClick={removeSpace}>Trim</button></div>
                        <div class="col-4 col-sm my-2"><button className="btn btn-primary mx-1" onClick={clear}>Clear</button></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className="my-4">Text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
