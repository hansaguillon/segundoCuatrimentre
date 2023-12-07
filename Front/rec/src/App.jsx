import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [sup,setsup] = useState("");
const [alto,setAlto] = useState("");
const [ancho,setAncho] = useState("");

const calcsup = (e) =>
{
  setsup(alto * ancho);
}
const valorAcho = (e) =>
{
  setAncho(e.target.value);
}
const valorAlto = (e) =>
{
  setAlto(e.target.value);
}

  return (
    <>
    <h1>Calcular Area Rectangulo</h1>
    <div>
    <label>Ancho <input type='number' placeholder='Ancho' onChange={valorAcho} />  </label>

    </div>
    <div>
    <label>Alto <input type='number' placeholder='Alto' onChange={valorAlto} />  </label>

    </div>
    <button onClick={calcsup}>Calcular Superficie</button>
    <div>
    <label>la Superficie es {sup}</label></div>
    </>
  )
}

export default App
