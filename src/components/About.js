import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "White",
  //   backgroundColor: "Black",
  //   padding: "9px",
  // });
  // set about page mode with the whole page not separate
  let myStyle = {
    color:props.mod ==='dark'?'white':'black',
    backgroundColor:props.mod ==='dark'?'black':'white'
  }
  
  const [btnText, setBtnText] = useState("Enable Light Mode");

  const [btnStyle, setbtnStyle] = useState({
    margin: "15px",
    background: "#000",
    color: "#fff",
    borderRadius: "8px",
  });

  const toggleStyle = () => {
    if (myStyle.color === "White" && btnStyle.color === "White") {
      // setMyStyle = myStyle
      myStyle(
        {
          color: "Black",
          backgroundColor: "White",
          // fontSize: "20px",
          fontWeight: "bold",
        },
        setbtnStyle({
          color: "#babaff",
          backgroundColor: "#020e22",
          fontWeight: "bold",
        })
      );

      setBtnText("Enable Dark Mode");
    } else {
      // setMyStyle = myStyle
      myStyle(
        {
          color: "White",
          backgroundColor: "Black",
          fontWeight: "bold",
        },
        setbtnStyle({
          color: "White",
          backgroundColor: "Black",
          fontWeight: "bold",
        })
      );
      setBtnText("Enable Light Mode");
    }
  };
  const stylee = {
    Color: "black",
    fontWeight: "bold",
    backgroundImage: "linear-gradient(25deg,#f95c1094,#63ec63,#00abff)",
    borderRadius: "19px",
    width: "175px",
    padding: "7px",
    border: "2px solid red",
  };
  return (
    <div className="container my-3" style={{ myStyle }}>
      <p style={{ border: "5px solid purple", padding: "8px" }}>
        <h1
          className="my-1"
          style={{ backgroundColor: "purple", color: "black" }}
        >
          About Us
        </h1>
        <div className="accordion my-1" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header my-1">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Help Center</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Contact Us :{" "}
                <a
                  href="
                  mailto:nxtversionnv007@gmail.com"
                >
                  send email
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Free to Use : this text manipulation app works fine in any
                browser such as : Chrome, Firefox, Opera, Internet Explorer,
                Safari. it is useful for counting text , converting to
                uppercase/lowercase, copy, clear, remove text by clicking. it
                counts word of blog, document(pdf, excel) & Essays.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header my-1">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Testimonials</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Analyze Your Text: TextUtils gives you a way to analyze your
                text quickly and efficiently
              </div>
            </div>
          </div>
        </div>
        <br />
        <button
          onClick={toggleStyle}
          style={btnStyle}
          className="btn btn-outline-success"
        >
          {btnText}
        </button>
        <button style={stylee} class="sam">
          Click Here SAM!
        </button>
      </p>
    </div>
  );
}
