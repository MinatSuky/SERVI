import React from 'react'
import ImgPrin from "../IMG/registroo.png"
import BarraPincipal from "../Componetes/BarraPincipal"

const Registro = () => {
  return (
    <div className="Conteiner">
      {/* Navegador */}
      <BarraPincipal />    
      <section className="flex SeccionRegistro ">

         {/* seccion 1 */}
        <div className="w-[50%] Contenedor2 flex justify-center items-center">
          <img className='w-[80%]' src="https://doodleipsum.com/700/hand-drawn?i=61f58fe19bc9afd5ac16257d92c48d19" alt="Super Idea by Irene Falgueras" />
        </div>
        {/* seccion 2 LOGIN */}
        <div className="w-[50%] Contenedor1 flex flex-col justify-center items-center">
          <div class="loginRegister">
            <div class="hader">
              <span className='text-[#3E40DD]'>Join us today!</span>
              <p>Sing up now to become a member.</p>
            </div>
            <form action="#">
              <input type="text" placeholder="Enter Name" required="" />
              <input type="email" placeholder="Enter Emaill" required="" />
              <input type="password" placeholder="Choose A Password" required="" />
              <input type="password" placeholder="Re-Enter Password" required="" />
              <p className='bg-[#3E40DD] font-semibold text-xl flex justify-center py-2 rounded-lg' value="Signup">INICIAR</p>
              <span> Already a member? <a className='text-[#3E40DD]' href="#">Login Here</a></span>
            </form>
          </div>
        </div>
      </section>
    </div>

  )
}
// <img src="https://doodleipsum.com/700/hand-drawn?i=4a51d1ffc4e6797c11a5b4c7cc33cda6 " alt="Coding by Irene Falgueras" />
export default Registro
