
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Contacto from './pages/contacto/contacto.jsx';
import Servicio from './pages/servicio/servicio.jsx';
import Inicio from './inicio.jsx';


function App() {

  return (
    <>
      <div>

        <nav>
        <Link to="/"></Link>
        <Link to="/pages/contacto"> Contacto</Link>
        <Link to="/pages/servicio"> Servicio </Link>

        </nav>
        <Routes>
          <Route path='/' element= {<Inicio />}/>
          <Route path="/pages/contacto" element= {<Contacto />}/>
          <Route path="/pages/servicio" element= {<Servicio />}/>
        </Routes>
      </div>
       
    </>
  )
}

export default App
