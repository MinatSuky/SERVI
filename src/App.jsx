
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registro from './pages/Registro'
import Casa from './pages/Casa'
import Iniciar from './pages/Iniciar'
import PagePrincipal from './pages/PagePrincipal'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Casa/>}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Iniciar' element={<Iniciar/>}/>
        <Route path='/PagePrincipal' element={<PagePrincipal/>}/>
       </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
