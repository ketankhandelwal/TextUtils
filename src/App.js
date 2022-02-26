
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React ,{useState} from 'react'
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');

  const [switchText, newSwitchText] = useState('dark');
  const [alert , setAlert]= useState('null');
const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type

  })
  
  setTimeout(() => {
    setAlert(null);
    
  }, 2000);

}

  const toogle =()=>
  {

    if(mode==='light')
    {
      setMode('dark');
      newSwitchText('light')
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode Activated","success");
      setInterval(() => {
        document.title='Welcome to TextUtils'
        
      }, 2000);
      setInterval(() => {
        document.title='Become our premium member now'
        
      }, 1500);


    }

    else{
      setMode('light')
      newSwitchText('Dark')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Activated","success");
    }
  }
  
  return (
    <>
    {/* <Router> */}
  <Navbar title="Ketan" mode={mode} toogleMode={toogle} newText={switchText} />
  <Alert alert={alert}/>
  <div className="container">
  {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
          <Textform heading="Type your text here" Al={showAlert} />
            
          {/* </Route>
        </Switch> */}
        
  
  {/* <About></About> */}
  </div>
  {/* </Router> */}

 


    </>

    
  );
}

export default App;
