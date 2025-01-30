
import React from 'react'
import ImgPrin from "../IMG/Captura de pantalla 2024-11-30 001002.png"
import BarraPincipal from "../Componetes/BarraPincipal"



const Casa = () => {
  return (
    <div className="Conteiner">
    {/* Navegador */}
    <BarraPincipal/>
    {/* seccion 1 */}
    <section className="flex SeccionHome h-[85vh]">
      <div className="w-[50%] Contenedor1 flex flex-col justify-center items-center">
        <div className='Contenedor1-1'>
          <p className=" text-[#3E40DD] font-bold titulo1">BIENVENIDO A</p>
          <p className="text-black mt-5 titulo2">SISTEMA AUTOMATICO DE REGISTRO <br /> VEHICULAR INSTITUCIONAL</p>
          <p className="text-black mt-1 titulo3">Guarda y registra tu vehiculo de manera <br /> mas eficiente y segura en <br /> nuestras instalaciones</p>
          <button class="BotonIntentalo hover:brightness-110 mt-3 font-bold py-3 px-6 rounded-md bg-[#3E40DD] shadow-lg hover:shadow-indigo-500/50 duration-200 text-white hover:w-[195px] w-[160px] flex justify-start items-center boton1">INTENTALO <span className="Flechita"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#ffffff" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"/></svg></span></button>
        </div>
      </div>
      {/* seccion 2 */}
      <div className="w-[50%] Contenedor2 flex justify-center items-center">
        <img className="w-[65%]" src={ImgPrin} alt="" />
      </div>
    </section>
  </div>
  )
}

export default Casa
