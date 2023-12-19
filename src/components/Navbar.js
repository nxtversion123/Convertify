// import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';
// import ColorPalette from './ColorPalette.js';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  const mystyle = {
    borderBottom: "4px solid lightCyan",
    width: "100vw",
    background:
      props.mod === "light"
        ? "linear-gradient(65deg, rgb(183, 214, 120), rgb(180, 180, 215), rgba(244, 227, 86, 0.71))"
        : "#e0fffc",
  };

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
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/,">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact Us
              </Link>
            </li>
            <div
              className={`form-check form-switch text-${
                props.mod === "light" ? "dark" : "light"
              }`}
              style={{
                // marginRight: "0px",
                fontWeight: "bold",
                position: "absolute",
                top: "15px",
                right: "90px",
              }}
            >
              {/* <ColorPalette
                style={{ backgroundColor: "black", color: "red" }}
              /> */}

              <input
                type="checkbox"
                className="form-check-input"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                // onClick={changeMode}
                className="form-check-label"
                // onClick={changeMode}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mod === "light" ? "Dark" : "Light"}
                {/* {switchText} */}
                {/* JSON.stringify{(switchText)} */}
              </label>
            </div>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};


Navbar.prototype = {title: PropTypes.string.isRequired ,
                    about: PropTypes.string ,
                     home: PropTypes.number};
                     
// Navbar.defaultProps = {
//     title: "set title here",
//     about: "about text here",
//     home: "set:Home"
// }                   

