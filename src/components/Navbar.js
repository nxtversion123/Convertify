import React from 'react';
import PropTypes from "prop-types";
// import { useState } from 'react';
// import ColorPalette from './ColorPalette.js';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  const mystyle = {
    borderBottom: "4px solid lightCyan",
    width: "98vw",
    // background:
    //   props.mod === "light"
    //     ? "linear-gradient(65deg, rgb(183, 214, 120), rgb(180, 180, 215), rgba(244, 227, 86, 0.71))"
    //     : "#e0fffc",
  };
  const mstyle = {
    textDecoration:'none',
    fontWeight: "500",
    fontSize: "larger" ,
    padding:'5px',
    // color:props.mod==='light'?'dark':'light',
  }

  // let [switchText, setSwitchText] = useState('DarkMode');
  // const changeMode = () => {
  //   if (props.mod === "light") {
  //     setSwitchText('DarkMode');
  //   } else {

  //        setSwitchText('LightMode')
  //   }
  // }

  // Code Of Colors:RGB buttons
  return (
    <nav
      id="zi"
      className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}
      style={mystyle}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ mstyle, fontWeight: "510" }}
        >
          {props.title}
        </a>
        <button
          style={{ position: "relative", right: "15px" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <button className="navbar-toggler-icon"></button>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-a active"
                aria-current="page"
                href="/"
                style={mstyle}
              >
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/about" style={mstyle}>
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/contact" style={mstyle}>
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <div
              // onclick ko function dete h function call nhi
              // onClick={props.toggleMode('primary)}-not allow but : onclick={()=> props.togglemode('primary')}-allowed
              onClick={() => {
                props.toggleMode("primary");
              }}
              className="bg-primary rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("success");
              }}
              className="bg-success rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("danger");
              }}
              className="bg-danger rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("warning");
              }}
              className="bg-warning rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("light");
              }}
              className="bg-light rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("dark");
              }}
              className="bg-dark rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("secondary");
              }}
              className="bg-secondary rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("info");
              }}
              className="bg-info rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
            <div
              onClick={() => {
                props.toggleMode("muted");
              }}
              className="bg-muted rounded"
              style={{
                marginLeft: "6px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
                // position: "relative",
                // top: "18px",
                // right: "170px",
              }}
            ></div>
          </div>

          {/* code for mode changing */}
          {/* Now we'll make togglemode in above code and comment below code */}
          {/* <div
            className={`form-check form-switch text-${
              props.mod === "light" ? "dark" : "light"
            }`}
            style={{
              marginLeft: "6px",
              // marginRight: "0px",
              fontWeight: "bold",
              // position: "relative",
              // top: "15px",
              // right: "40px",
            }}
          > */}
          {/* <ColorPalette
                style={{ backgroundColor: "black", color: "red" }}
              /> */}

          {/* <input
              type="checkbox"
              className="form-check-input"
              // onClick={props.toggleMode}
              onClick={()=>{props.toggleMode(null)}}
              id="flexSwitchCheckDefault"
            />
            <label
              // onClick={changeMode}
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            > */}
          {/* {props.mod === "light" ? "Dark" : "Light"} */}
          {/* ToggleMode */}
          {/* not used below lines */}
          {/* {switchText} */}
          {/* JSON.stringify{(switchText)} */}
          {/* </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  home: PropTypes.number,
};

// Navbar.defaultProps = {
//     title: "set title here",
//     about: "about text here",
//     home: "set:Home"
// }
