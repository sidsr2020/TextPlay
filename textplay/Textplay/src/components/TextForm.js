import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText]=useState('Enter your Text here');
  // text = "new text" // wrong way to change the state.
  // setText("New one here"); // right way to change the state.

  const handleUpperClick= ()=>{
      // console.log("Button was clicked.")
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase.","success");
  }

  const handleLowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase.","success");
  }

  const handleClearClick = ()=>{
    setText("");
    props.showAlert("Text has been cleared.","success");
  }

  const handleReverseClick = ()=>{
    let wordsArray = text.split(' ');
    let newText="";
    for(let i=wordsArray.length-1;i>=0;i-- ){
        newText+=wordsArray[i];
        if(i!==0){
          newText+=" ";
        }
    }
    setText(newText);
    props.showAlert("Text has been reversed.","success");
  }
  
  const handleReverseAllClick = ()=>{
    let reverseWordArr = text.split(" ").map(word => word.split("").reverse().join(""));
    let newText = reverseWordArr.join(" ");
    setText(newText);
    props.showAlert("All characters has beeen reversed.","success");
  }
  const handleSpeakClick = ()=>{
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    props.showAlert("Speaking the text.","success");
  }

  const handleCapitalClick = ()=>{
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text has been capitalized.","success");
  }

  const handleCopyClick = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied to clipboard.","success");
  }
  
  const handleExtraClick = ()=>{
    // using regex generator here.
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed.","success");
  }
  const handleOnChange= (event)=>{
    // console.log("On change")
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#2c2b2b' : 'white',color: props.mode==='dark'? 'white':'black'}}   value={text} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning mx-1" onClick={handleReverseClick}>Reverse the Text</button>
        <button className="btn btn-info mx-1" onClick={handleReverseAllClick}>Reverse All Text</button>
        <button className="btn btn-dark mx-1" onClick={handleSpeakClick}>Speak the Text</button>
        <button className="btn btn-secondary mx-1" onClick={handleCapitalClick}>Capitalize Text</button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-success mx-1 my-2" onClick={handleExtraClick}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p><b>{text.split(' ').length} words and {text.length} characters</b></p>
      <p><b>{0.008 * text.split(' ').length} Minutes read</b></p>
      {/* <h2>Preview</h2>
      <p>{text}</p> */}
    </div>
    </>
  )
}
