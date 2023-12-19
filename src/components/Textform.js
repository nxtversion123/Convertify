/* eslint-disable no-useless-concat */
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("upcase clicked" + " " + text);
    setText("fired handleUpClick function");
    // setTimeout(() => { //To log text of above line in textarea
    //   let newText = text.toUpperCase();
    //   setText(newText);
    // }, 3000);
    let newText = text.toUpperCase();
    setText(newText);
        props.showalert("Converted to Uppercase", " success : ")

  };
  const handleLwClick = () => {
    console.log("Lwcase clicked" + " " + text);
    setText("fired handleLwClick function");
    // setTimeout(() => { //To log text of above line in textarea
    //   let newText = text.toUpperCase();
    //   setText(newText);
    // }, 3000);
    let newText = text.toLowerCase();
    setText(newText);
            props.showalert("Converted to Lowercase", "success : ");
      // document.title = "TextUtils Lower";


  };
  const handleClearClick = () => {
    let newText = "";
    // console.log("clear text Clicked")
    setText(newText);
    // Above 2 lines:setText("")
    props.showalert("Text Cleared", "success : ");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    props.showalert("typing");
  };
  const handleCopy = () => {
    console.log("i am copy function");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
            props.showalert("Copied Text to clipboard",'success : ');

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
            props.showalert("removed extra spaces", "success : ");

  }

  const [text, setText] = useState("default value of text");
  // text="cmkd";this type of updation not allowed in state: use function setText
  // setText("Write like this"); :correct way

  // let bgColor = document.getElementsByClassName("container");
  // if (bgColor === "bg-dark") {
  //   bgColor.style.color = "white";
  // }
  // else{
  //   bgColor.style.color = "black";
  // }

  return (
    <>
      <div
        className="container bg-dark"
        style={{
          color: props.mod === "aliceblue" ? "#021713" : "aliceblue",
          position: "relative",
          marginTop: "95px",
          border: "9px solid grey",
          borderRadius: "4px",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "800", height: "30px" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          {/* <label
          for="mybox"
          className="form-label"
            // style={{ fontSize: "30px", fontWeight: "800", height: "100px" }}
        >
          {/* {props.heading} */}
          {/* </label> */}
          <textarea
            value={text}
            onChange={handleOnChange}
            style={{
              margin: "40px 0px",
              fontSize: "large",
              backgroundColor: props.mod === "dark" ? "grey" : "white",
              color: props.mod === "dark" ? "aliceblue" : "black",
            }}
            placeholder="it'll not rendered cause of value={text}[state]"
            className="form-control"
            id="mybox"
            rows="9"
          ></textarea>
          {/* add in textarea to make larger : style={{ height:"150px" }} */}
        </div>
        <button
          style={{ margin: "5px", borderRadius: "19px" }}
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          style={{ margin: "5px", borderRadius: "19px" }}
          className="btn btn-secondary"
          onClick={handleLwClick}
        >
          Convert to LowerCase
        </button>
        <button
          style={{ margin: "5px", borderRadius: "19px",}}
          className="btn btn-outline-danger"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          style={{ margin: "5px", borderRadius: "19px" }}
          className="btn btn-outline-success"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          style={{ margin: "5px", borderRadius: "19px" }}
          className="btn btn-outline-info"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mod === "light" ? "#000" : "#fff" }}
      >
        <h1>Your Text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview of Text : Below</h2>
        <p>{text.length>0 ?  text:"Enter Text to Preview Here"}</p>
      </div>
    </>
  );
}
