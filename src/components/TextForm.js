import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Converted to uppercase','Success')
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase", "Success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handlespaces = () => {
    let newtext = text.toString().replace(/\s+/g, " ").trim();
    setText(newtext);
    props.showalert("removed extra spaces", "Success");
  };
  const [text, setText] = useState("Enter Text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert To uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert To lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlespaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
