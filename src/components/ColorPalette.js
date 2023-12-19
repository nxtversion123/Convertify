import React, { useState } from "react";

export default function ColorPalette() {
  const ColorChanger = () => {
    const [backgroundgColor, setBackgroundColor] = useState("");
    const changeColor = (color) => {
      document.body.style.backgroundColor = color;
      setBackgroundColor(color);
    };
    return (
      <div>
        <div
          className="cp"
          style={{
            position: "absolute",
            top: "9px",
            right: "170px",
            backgroundColor: {},
          }}
        >
          <button
            onClick={() => {
              changeColor("#ff0000");
            }}
            class="circle1"
            style={{
              bgColor: "",

              backgroundColor: "red",
              margin: "5px",
              display: "inline-block",
              width: "25px",
              height: "25px",
              borderRadius: "15px",
              border: "1px solid red",
            }}
          ></button>
          <button
            onClick={() => {
              changeColor("#0000ff");
            }}
            class="circle2"
            style={{
              bgColor: "",
              backgroundColor: "blue",
              margin: "5px",
              display: "inline-block",
              width: "25px",
              height: "25px",
              borderRadius: "15px",
              border: "1px solid blue",
            }}
          ></button>
          <button
            onClick={() => {
              changeColor("#00ff00");
            }}
            class="circle3"
            style={{
              bgColor: "",

              backgroundColor: "green",
              margin: "5px",
              display: "inline-block",
              width: "25px",
              height: "25px",
              borderRadius: "15px",
              border: "1px solid green",
            }}
          ></button>
        </div>
      </div>
    );
  };
}
