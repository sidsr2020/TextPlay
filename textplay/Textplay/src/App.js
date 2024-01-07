// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode has been enabled","success");
        // document.title= "TextUtils - Dark Mode"; to change title 
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled","success");
        // document.title= "TextUtils - Light Mode"; to change title 
    }
  };

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type 
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextPlay" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar /> */}
      {/* default props workss here */}

      <div className="container my-3">
      {/* <Switch> */}
      {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
      {/* <About/> */}
      {/* </Switch> */}
      </div>

    {/* </Router> */}
    </>
  );
}
// you have to use jsx fragments like <></> inside return to add tags inside fragments  like <><h1> </h1></>
export default App;
