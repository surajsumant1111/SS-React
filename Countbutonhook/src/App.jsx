import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let Variables=15;
  let [Variables, SetVariables]=useState(15);
  //here we use hooks
  let [cons,setCons]=useState("Suraj Kumar")
  let [value,setValue]=useState("")
  const dream=(e)=>{
    setValue(e.target.value)
  }

  const increseValue=()=>{
    //At learning time they give in assigment button won't increase after 20 thats why we give if condition
    if(Variables<20)
    {
      Variables=Variables+1
    }
    console.log(Variables);
    SetVariables(Variables)
  }
  const decreaseValue=()=>{
    //At learning time they give in assigment button won't Decrease less then 0 thats why we give if condition
    if(Variables>0)
    {
      Variables--;
    }
    console.log(Variables);
    SetVariables(Variables)
  }

    return (
    <>
      <h1>Button Using Hooks</h1>
      <h2>Value = {Variables}</h2>
      <button onClick={increseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <h2>By {cons}</h2>
      <button onClick={()=>setCons("Suraj Sumant")}>update</button>
      {/* <br/><br/>
      <input type="text" value={value} onChange={dream}/> */}



      
    </>
  )
}

export default App
