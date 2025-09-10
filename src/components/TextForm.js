import React, {useState} from 'react'

export default function TextForm(props) {
const handelUpClick=()=>{
  console.log("chnage to upperCase"+ text)
  let newText=text.toUpperCase();
  setText(newText)
}
const handelLoClick=()=>{
  console.log("chnage to upperCase"+ text)
  let newText=text.toLowerCase();
  setText(newText)
}
const handelExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
const handelCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handelClearClick=()=>{
  let newText="";
  setText(newText)
}
const handelOnChange=(event)=>{
  console.log("hadel on change")
  setText(event.target.value)
}


  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>  
    <h1>{props.heading}</h1> 
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`, color:props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handelUpClick}>Convert to upperCase</button> 
    <button className="btn btn-secondary mx-2" onClick={handelLoClick}>Convert to lowerCase</button>
    <button className="btn btn-danger mx-2" onClick={handelExtraSpaces}>Remove ExtraSpaces</button>
    <button className="btn btn-success" onClick={handelCopy}>Copy</button>    
    <button className="btn btn-warning mx-2" onClick={handelClearClick}>Clear</button>    
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`black`}}>
    <h2> Summary </h2>
    <p>There are <b>{text.split(" ").length}</b> words and <b>{text.length}</b> charachters in this text </p>
    <p> It will take approximatly <b>{0.2008 *text.split(" ").length}</b> minutes to read this text</p>
    <h2>Preview</h2>
      <p>{text.length>0?text:`Enter your text`}</p>
    </div>
    </>
  )
}
