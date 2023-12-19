import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState( {
    color:"White",
    backgroundColor:"Black",
    padding:'9px',
  });
  const [btnText , setBtnText] = useState("Enable Light Mode");

  const [btnStyle, setbtnStyle] = useState({ margin: "15px", background: "#000", color: "#fff", borderRadius:"8px", });

  const toggleStyle = () => {
    if(myStyle.color === "White" && btnStyle.color === 'White'){
      setMyStyle(
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
      
    }
    else{
      setMyStyle(
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
  }
  const stylee = {
    Color: "black",
    fontWeight: "bold",
    backgroundImage:
      "linear-gradient(25deg,#f95c1094,#63ec63,#00abff)",
    borderRadius: "19px",
    width: "175px",
    padding: "7px",
    border: "2px solid red",
  };
  return (
    <div className="container my-3" style={{ myStyle }}>
      <p style={{border:'5px solid purple', padding:'8px'}}>
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
                E-mail Us{" "}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Help Center{" "}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Testimonials{" "}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
