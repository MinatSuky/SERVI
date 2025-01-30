
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Registro from './pages/Registro'
import Homee from './pages/Homee'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homee/>}/>
        <Route path='/Registro' element={<Registro/>}/>
       </Routes>
       </BrowserRouter>
       
    </>
  )
}

export default App
