import React from 'react'

const Eliminar = ({negacionELIMINAR}) => {
    return (
        <div onClick={negacionELIMINAR} className='w-[100%] bg-black/50 h-[100%] absolute z-20 flex justify-center items-center '>
            <div className='bg-white z-30 p-10 rounded-xl flex-col flex'>
                 <p className='text-red-500 font-bold'> ¿Seguro que quieres borrar a? </p>               
                  <p className='text-black text-center text-xl font-semibold'>Venzo rin 29</p> 
                  <button onClick={negacionELIMINAR} className='text-white font-bold bg-red-500 shadow-lg shadow-red-500/50 px-6 py-2 rounded-lg mt-4 '>Eliminar</button>
            </div>
        </div>
    )
}

export default Eliminar
