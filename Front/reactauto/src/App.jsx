


function App() {
  //generar numero aletario entre 1 y 40
const numeroal = Math.floor(Math.random() *40)+1;
let color;
if (numeroal >= 30)
{
  color = "#00FF00";
}
else{
  if(numeroal >= 20 && numeroal <30)
  {
    color = "#FFFF00";
  }
  else{
    if(numeroal >= 10 && numeroal < 20)
    {
      color = "#FFA500"
    }
    else{
      color = "#FF0000";
    }
  }
}


  return (
    <>
     <div>{numeroal}</div>
     <div style={{backgroundColor: color}}>{color}</div>
    </>
  )
}

export default App
