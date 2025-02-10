import React from 'react'

const Editar = ({negacionEDITAR}) => {
    return (
        <div className='w-[100%] bg-black/50 h-[110%] absolute z-20 flex justify-center items-center '>
            <div className='bg-white relative rounded-lg flex flex-col justify-center items-center m-3 py-3'>
                <svg onClick={negacionEDITAR} className='absolute top-2 right-3' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                </svg>
                <div className='flex justify-center scale-50 rounded-lg'>
                    <img className='w-fit border' src="https://http2.mlstatic.com/D_NQ_NP_824690-MCO52026661218_102022-O.webp" alt="" />
                </div>
                <div className='w-[90%] flex flex-col items-start'>
                    <p className='text-black text-start font-semibold'>Numero de Serie</p>
                    <input type="text" className="bg-gray-100 w-[90%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150" placeholder="A1232484256" />
                    <p className='text-black text-start font-semibold'>Marca</p>
                    <input type="text" className="bg-gray-100 w-[90%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150" placeholder="Venzo rin 29" />
                    <p className='text-black text-start font-semibold'>Colores</p>
                    <input type="text" className="bg-gray-100 w-[90%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150" placeholder="Negro, Gris" />
                    <button className='text-white font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 px-6 py-2 rounded-lg mt-4'>Guardar</button>
                </div>
            </div>
        </div>
    )
}

export default Editar
