// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import React, { useState } from "react";
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
  const [alert, setAlert] = useState(
    setTimeout((alert) => {
      setAlert(null);
    }, 2000)
  ); //alert object h yaha

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type, // or type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  // jab site load hoti h tab document.body me background wali koi class nhi h, ab jaise hi red icon pe click hoga to bg-danger class add ho gayi to background red color aa raha h par jab green icon pe click hoga to bg-success class body me add to ho gayi par bg-danger remove nhi hui to red color hi show hoga kyoki bg-danger pahle add hui thi body me to ye jab tak nhi remove hogi tab tak color change nhi hoga body ka to function banate h:

  const removeBodyClasses = (()=> {
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-muted");
    document.body.classList.remove("bg-info");
  });

  // bootstrap ki colouring classes se hoti h to class paas karenge, jab dark-light or light-dark theme karenge to claas NULL hogi
  const Toggle = (claas) => {
    // console.log(claas);
    removeBodyClasses();
    document.body.classList.add("bg-" + claas);

    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode has been Enabled ", "success : ");
      // document.title = "TextCraft Dark Theme";
      // to blink title
      // setInterval(() => {
      //   document.title = "Install TextCraft";
      // }, 2000);

      // setTextColor("aliceblue");
      document.body.style.backgroundColor = "#071a2f";
    } else {
      setMode("light");
      showAlert("Light Mode has been Enabled ", "success : ");
      // document.title = "TextCraft Light Theme";
      // to blink title
      // setInterval(() => {
      //   document.title = "TextCraft is Awesome";
      // },1500);

      // setTextColor("black");
      // document.body.style.backgroundColor = "white";
    }
  };
  return (
    <header
      id="HD"
      style={{
        height: "auto",
        border: " 4px solid blue",
        // background:
        //   mode === "light"
        //     ? "linear-gradient(25deg, rgb(83, 234, 120), rgb(120, 223, 255), rgba(244, 227, 86, 0.71))"
        //     : "#071a2f",
      }}
    >
      <Router>
        <Navbar
          title="TextCraft"
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
            height: "auto",
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
            <Route exact path="/about" element={<About mod={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <Textform
                  showalert={showAlert}
                  // heading="Enter Text to Analyze...."
                  heading="TextCraft - Word Counter, Copy/Clear text, Remove Xtra Spaces"
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
          {/* <About /> */}
          <br />
        </div>
      </Router>
    </header>
  );
}

export default App;
