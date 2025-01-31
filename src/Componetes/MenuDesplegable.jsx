import React from 'react'
import { Link } from 'react-router-dom'

const MenuDesplegable = () => {
    return (
        <div className="Botones1 px-7 absolute left-0 top-[65px] flex flex-col justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-700 w-[100%]">
            <Link className=' bg-white text-black px-[40%] py-3 rounded-lg mt-10 TextType' to={'/Registro'}>
                <button className="">Registrate</button>
            </Link>
            <Link className="py-3 px-[35%] no-wrap rounded-lg TextType mb-5 border-2 text-white" to={'/Iniciar'}>
            <button>Inicia Sesion</button>
            </Link>
        </div>
    )
}

export default MenuDesplegable
