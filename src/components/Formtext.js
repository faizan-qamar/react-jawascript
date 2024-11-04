import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");

    const uppercase = (event) => {
         event.preventDefault(); // Prevent form submission
        let finalText =setText (text.toUpperCase()); 
     
    };
    const lowercase = (event) => {
        event.preventDefault(); // Prevent form submission
       let finalText =setText (text.toLowerCase()); 
    
   };

    const handleOnChange = (event) => {
      setText(event.target.value);
  };

    return (
       <>
        <form>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                onChange={handleOnChange}
                value={text} style={{backgroundColor:props.mode==="dark"?"gray":"white" ,color:props.mode==="dark"?"white":"black"}}
                required
            ></textarea>
           <div className="container my-1">
             <button type="submit" className="btn btn-primary " onClick={uppercase}>
                Uppercase
            </button>
            <button type="submit" className="btn btn-primary mx-2" onClick={lowercase}>
                lowercase
            </button>
            </div>
        </form>
        <div style={{color:props.mode==="dark"?"white":"black"}}>
        <p>{text.split(" ").filter(word => word.trim() !== "").length}words,
             {text.length} Characters</p> 
            <p> {0.008*text.split(" ").length}minutes required for read this  </p>
            <h5>FOR READIND</h5>
            <p>{text}</p>
        </div>
       </>
    );
}
