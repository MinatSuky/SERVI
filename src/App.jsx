
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registro from './pages/Registro'
import Casa from './pages/Casa'
import Iniciar from './pages/Iniciar'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Casa/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Iniciar' element={<Iniciar/>}/>
       </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
