//styles:
import s from'./App.module.css'
//React:
import { Routes, Route, useLocation} from "react-router-dom"
//Components:
import Home from "./components/home/Home"
import fondo from "./paisaje.jpg"
import Galeria from './components/galeria/Galeria.jsx'
import MGalery from "./components/MGalery/MGalery.jsx"

 function App(){
  const locationn = useLocation()

  return (
    <div className={s.app}>
       {locationn.pathname === "/galeria" ? <MGalery/> : console.log("Error") }
      <img className={s.fondo} src={fondo}></img>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/galeria' element={<Galeria/>}/>
      </Routes>
    </div>
  )
}


export default App;