import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "hansito";
  const colors = [{id: 1, name: "Blue"},{id: 2, name: "Red"},{id: 3, name: "Green"},{id: 4, name: "White"}];
  return (
  <>
  <h1>Hello word</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus explicabo quisquam ex magnam, accusamus, corporis repellendus commodi ducimus placeat quidem, neque quos numquam aliquam iusto modi provident totam soluta doloremque!</p>
  <p>Hola {name}</p>
  
  <ol>
    {colors.map (c => <li key={c.id}>{c.name}</li>)}


  </ol>
  </>
  )
}
export default App;
