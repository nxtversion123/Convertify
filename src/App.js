// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import { useState } from "react";
import "./in.css";
import Alert from "./components/Alert";
// import ColorPalette from "./components/ColorPalette.js";

import {
  BrowserRouter as Router,
  Routes,
  // Link,
  Route,
} from 'react-router-dom';


function App(props) {
  const [mode, setMode] = useState("light");
  
  // const [textColor, setTextColor] = useState("dark");
  const [alert, setAlert] = useState(setTimeout((alert) => {
   setAlert(null);
  }, 2000)); //alert object h yaha

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type, // or type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const Toggle = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been Enabled ", "success : ");
      // document.title = "TextUtils Dark Theme";
      // to blink title
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 2000);

      // setTextColor("aliceblue");
      // document.body.style.backgroundColor = "#071a2f";
    } else {
      setMode("light");
      showAlert("Light Mode has been Enabled ", "success : ");
      // document.title = "TextUtils Light Theme";
      // to blink title
      // setInterval(() => {
      //   document.title = "TextUtils is Awesome";
      // },1500);


      // setTextColor("black");
      // document.body.style.backgroundColor = "white";
    }
  };
  return (
    <header
      id="HD"
      style={{
        height: "210vh",
        border: " 4px solid blue",
        background:
          mode === "light"
            ? "linear-gradient(25deg, rgb(83, 234, 120), rgb(120, 223, 255), rgba(244, 227, 86, 0.71))"
            : "#071a2f",
      }}
    >
      <Router>
        <Navbar
          title="TextUtils"
          about="About Organization"
          home="Home"
          mod={mode}
          toggleMode={Toggle}
          // Mode={mode}
        />
        {/* <ColorPalette /> */}
        <br />
        <br />
        <br />

        <Alert alerT={alert} style={{ color: "" }} />
        <div
          style={{
            height: "110vh",
            border: "4px solid black",
            margin: "auto",
            textAlign: "center",
            marginTop: "80px",
          }}
          className="container"
        >
          <Routes>

           {/* /users */}
          {/* /users/about if exact path not used here then partial matching hogi jisse users hi keval render hoga users/about nhi */} 
            <Route
              exact
              path="/about"
              element={
                <About />
              }
            ></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  showalert={showAlert}
                  heading="Enter Text to Analyze...."
                  mod={mode}
                />
              }
            ></Route>
          </Routes>
          {/* <Textform
          showalert={showAlert}
          heading="Enter Text to Analyze...."
          mod={mode} */}
          {/* /> */}
          <br />
          <br />
          <br />
          <br />
          {/* <About />*/}
          <br />
        </div>
      </Router>
    </header>
  );
}

export default App;
