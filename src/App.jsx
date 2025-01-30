
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registro from './pages/Registro'
import Casa from './pages/Casa'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Casa/>}/>
        <Route path='/Registro' element={<Registro/>}/>
       </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
