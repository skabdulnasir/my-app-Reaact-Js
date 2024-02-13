import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const[text, setText] = useState("Enter text here");
    //text = "new text" //wrong way
    //setText("new text") //right way to chnage the state 
  return (
    // <div>
    //     <h1>{props.heading}</h1>
    //     <div class="mb-3">
    //         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    //     </div>
    //     <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    // </div>

    //8 & 12 Style part with tarnary operator
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter in the textbox Something to preview it here"}</p>
    </div>
    </>
  )
}
