import React,{useState} from 'react'



import Textform from './components/Formtext';
import Navbar from './components/Navbar'
import About from './components/About'
import {
  BrowserRouter as Router,
    Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");

const enablebtn=()=>{  
 if(mode==="light") 
{ 
  setmode("dark")
  document.body.style.backgroundColor="#260760"
}
 else
 {
  setmode("light")
 document.body.style.backgroundColor="white"
}
}

   return (
<Router>
  <div>
    <Navbar title="ChangeText" mode={mode} enableBtn={enablebtn} />
    <div className="container my-5">
      <Textform mode={mode} enableBtn={enablebtn} />
    </div>
    <Routes>
      <Route path="/about" element={<About />} /> 
    </Routes>
  </div>
</Router>

  );
}

export default App;
