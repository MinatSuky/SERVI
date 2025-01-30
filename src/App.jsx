
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Registro from './pages/Registro'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Registro' element={<Registro/>}/>
       </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
