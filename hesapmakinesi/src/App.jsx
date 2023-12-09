import React from 'react'
import './App.css'
import Numbers from './Numbers'
import Display from './Display'
import Operations from './Operations'
import TopButtons from './TopButtons'
import * as math  from "mathjs"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [value,setValue]=React.useState("")
  const [result,setResult]=React.useState("")
  const [trig,setTrig] = React.useState("")
  
  function addText(val){
    setValue(prev=> ([...prev,val+""]))
  }
  
  function reset(){
    setResult("")
    setValue("")
    setTrig("")
  }

  function calculate(){
    if (trig==("")) {
      const input= value.join("")
      setValue("")
      setResult(math.evaluate(input))
  }
    else if (trig == ("sin")) {
      const number= parseInt(value.join(""), 10)
      const angle=(number * Math.PI)/180;
      setResult(Math.sin(angle).toFixed(3));
      setValue("")
      setTrig("")
    }

    else {
      const number= parseInt(value.join(""), 10)
      const angle=(number * Math.PI)/180;
      setResult(Math.sin(angle).toFixed(3));
      setValue("")
      setTrig("")
    }
}
    

  function sin(){
    setValue("")
    setResult("")
    setTrig("sin")
  }

  function cos(){
    setValue("")
    setResult("")
    setTrig("cos")
  }


   return(
    <>
    <div id='calculator'>
      <div id='title'>YTU Sigma Aeronautics</div>
      <Display className="display" value={value} result={result} trig={trig}/>
      <TopButtons reset={reset} sin={sin} cos={cos}/>
      
      <div className='allLists'>
          <Numbers handleClick={addText} className="numberdeneme"></Numbers>
          <div className='operationsList'>
          <Operations  className="operationBox"  value="*" symbol="X" handleClick={addText}></Operations>
          <Operations  className="operationBox" value="/" symbol="/" handleClick={addText}></Operations>
          <Operations  className="operationBox" value="-" symbol="-" handleClick={addText}></Operations>
          <Operations className="operationBox"  value="+" symbol="+" handleClick={addText}></Operations>
          <div id='equal' className="operationBox" value="=" symbol="=" onClick={calculate}>=</div>
          </div>
      </div>    
    </div>
    </>
   )
}

export default App
