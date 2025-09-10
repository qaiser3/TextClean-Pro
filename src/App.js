
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
//import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';

function App() {
  const [mode, setMode]=useState("light")
  const toggelMode=()=>{
    if(mode===`light`){
      setMode(`dark`);
      document.body.style.backgroundColor="#2f355c";
      document.title="TexUtils.darkmode"
      setInterval(()=>{
        document.title="TexUtils.isAmazing"
      },1500);
      setInterval(()=>{
        document.title="TexUtils.enjoy"
      },2000);
    }else{
      setMode(`light`);
      document.body.style.backgroundColor="grey";
      document.title="TexUtils.lightmode"
    }
  }
  return (
  <>
{/*<Router>*/}
<Navbar title= "TexUtils" Home="Home"  mode={mode} toggelMode={toggelMode}/>
<Alert Alert= "some thing here"/>
<div className="container my-3" >
{/*<Routes>*/}
   <TextForm heading="Enter the text to analysis" mode={mode}/>
    {/*<Route path="/about" element={<About />} /> */}  
{/*</Routes>*/}   
</div>  
{/*</Router>*/}      
  </>
  );
}

export default App;
