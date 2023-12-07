import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [gradosf,setGradosf] = useState("");


const convertirGradosaF = (e) =>
{
  const valor = e.target.value;
  setGradosf((valor * 9/5)+32);
}
  return (
    <>
    <h1>Pasar grados C a F</h1>
    <div>
    <label> Celcius
    <input type='number'placeholder='Grados C' onChange={convertirGradosaF} /></label>
    </div>
    <div>
    <label> Fahrenheit
    <input type='number' disabled  placeholder='Grados Fahrenheit' value={gradosf}/> </label>
    </div>
    </>
  )
}

export default App
