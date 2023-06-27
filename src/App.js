import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const f = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#000080";
      showalert("Dark mode has been enabled", "success");
      document.title = "Textutils- Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "Textutils- Light mode";
    }
  };
  
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils2" mode={mode} togglemode={f} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path='/' element={ */}
              <TextForm
                showalert={showalert}
                heading="Enter your text here to analyze below"
                mode={mode}
              />
              {/*  />} /> */}
            {/* <Route exact path='/about' element = {<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
