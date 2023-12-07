import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pesos,setPesos] = useState(0);
  const [dolares,setDolar] = useState(0);


  const convertiraDolares = (e) =>{
    const valor = e.target.value;
    setPesos(valor);
    setDolar(valor * 350);
  }
  const convertiraPesos = (e) =>{
    const valor = e.target.value;
    setDolar(valor);
    setPesos(valor /350);

  }


  return (
    <>
      <h1>Convertir pesos a dolares</h1>
  <input type="number" placeholder="Pesos" onChange={convertiraDolares} value={pesos}/>
  <input type="number" placeholder="Dolares" onChange={convertiraPesos}  value={dolares}/>
    </>
  )
}

export default App
