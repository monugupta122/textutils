// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

let data = {
  title: "TextUtils",
  aboutUs: "About us"
};

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutUs="About Us "/> */}
      <Navbar title={data.title} aboutUs={data.aboutUs} mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm  mode={mode} />
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App; 
