// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


// let name = "Nasir"
function App() {
  //video 12
  const [mode, setMode] = useState("light");

  //video 13 starts
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      //13
      showAlert("Dark Mode has been enabled", "success");
      //15 dynamically changing the title
      document.title = "My App - Dark Mode" //Title will be this when i moved to dark mode 

      //like an adv pop up
      // setInterval(()=>{
      //   document.title='Text utils amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title='Text utils install'
      // },1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "My App - Light Mode"
    }
  }
  //this upper part ends videpo 12

  //video 13 starts



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         SK Abdul Nasir
  //       </a>
  //     </header>
  //   </div>
  // );
  //4
  // return (
  //   <>
  //   <nav>
  //     <li>Home</li>
  //     <li>About</li>
  //     <li>Contact US</li>
  //   </nav>

  //   <div className="container">
  //     <h1>Hello {name}</h1>
  //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui enim rerum nihil hic voluptates quasi nisi sequi quae consectetur adipisci!</p>
  //   </div>
  //   </>
  // )

  //5
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My-APP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

      {/* <Router> */}
        <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* /*16 video*/}

          {/* <Routes>
            <Route path='/About' element={<About/>}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
            </Route>
          </Routes> */}


          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  )
}

export default App;




