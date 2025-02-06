import React from 'react'
import BarraPincipal from "../Componetes/BarraPincipal"
import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <div className="Conteiner">
      {/* Navegador */}
      <BarraPincipal />    
      <section className="flex SeccionRegistro ">

         {/* seccion 1 IAMGEN */}
        <div className="w-[50%] Contenedor2 flex justify-center items-center">
          <img className='w-[80%]' src="https://doodleipsum.com/700/hand-drawn?i=61f58fe19bc9afd5ac16257d92c48d19" alt="Super Idea by Irene Falgueras" />
        </div>
        {/* seccion 2 LOGIN */}
        <div className="w-[50%] Contenedor1 flex flex-col justify-center items-center">
          <div class="loginRegister">
            <div class="hader">
              <span className='text-[#3E40DD]'>Unete a Nosotros hoy!</span>
              <p>Regístrate ahora para convertirte en miembro.</p>
            </div>
            <form action="#">
              <input className='bg-white' type="text" placeholder="Nombre" required="" />
              <input className='bg-white' type="text" placeholder="Gmail" required="" />
              <input className='bg-white' type="password" placeholder="Contraseña" required="" />
              <input className='bg-white' type="number" placeholder="Documento ID" required="" />
              <input className='bg-white' type="date" required="" />
              <p className='bg-[#3E40DD] font-semibold text-lg flex text-white justify-center py-2 rounded-lg' value="Signup">Registrarse</p>
              <span> Ya eres Miembro? <Link to={'/Iniciar'}> <a className='text-[#3E40DD]'>Entra Aqui</a> </Link></span>
            </form>
          </div>
        </div>
      </section>
    </div>

  )
}
// <img src="https://doodleipsum.com/700/hand-drawn?i=4a51d1ffc4e6797c11a5b4c7cc33cda6 " alt="Coding by Irene Falgueras" />
export default Registro
