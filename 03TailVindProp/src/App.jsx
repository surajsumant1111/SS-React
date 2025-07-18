import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let suraj={
    user:"sumant",
    age:28
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-2 rounded-xl'>TailWind CSS</h1><br/>
    {/* <Card user="suraj" users={suraj}/><br/> */}
    <Card btnText1="Click Me" btnText2="discard"/>
    <Card/>
    </>
  )
}

export default App
