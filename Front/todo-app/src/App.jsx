import { useState } from 'react';
import './App.css'

function App() {
const [counter,setCounter]  = useState(0);
const [text,setText] = useState("");
const addOneHandle = () => {
  setCounter(counter+1);
}
const deleteOneHandle =() =>
{
  setCounter(counter-1);
}
const handleInputChange = (e)=>
{
  setText(e.target.value);
}
  return (
    <>
     <h1>This is an awesome counter!</h1>
     <p>{counter}</p>
     <button onClick={addOneHandle}>add one</button>
     <button onClick={deleteOneHandle}>Delete One </button>

     <form>
      <input type='text' placeholder='Ingrese Texto' onChange={handleInputChange}></input>
      
      <p>Estado del input</p>
      <p>{text}</p>
     </form>
    </>
  )
}

export default App
