import React from 'react'

const Agregar = ({negacionAgregar}) => {
    return (
        <div className='w-[100%] bg-black/50 h-[100%] absolute z-20 flex justify-center items-center '>
            <div className='bg-white relative rounded-lg flex flex-col justify-center items-center m-3 py-3'>
                <svg onClick={negacionAgregar} className='absolute top-2 right-3' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                </svg>
                <div className='flex justify-center border scale-50 p-3'>
                <svg className='absolute bottom-32' xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="#999999" d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm.008-12c.548 0 .992.445.992.993v9.349A6 6 0 0 0 20 13V5H4l.001 14l9.292-9.293a1 1 0 0 1 1.32-.084l.094.085l3.545 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM8 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"/></svg>
                    <img className='w-fit rounded-md opacity-0' src="https://http2.mlstatic.com/D_NQ_NP_824690-MCO52026661218_102022-O.webp" alt="" />
                </div>
                <div className='w-[90%] flex flex-col items-start'>
                    <p className='text-black text-start font-semibold'>Numero de Serie</p>
                    <input type="text" className="bg-gray-100 w-[100%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150" />
                    <p className='text-black text-start font-semibold'>Marca</p>
                    <input type="text" className="bg-gray-100 w-[100%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150"  />
                    <p className='text-black text-start font-semibold'>Colores</p>
                    <input type="text" className="bg-gray-100 w-[100%] text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition ease-in-out duration-150" />
                    <button className='text-white font-bold bg-cyan-500 shadow-lg shadow-cyan-500/50 px-6 py-2 rounded-lg mt-4 mb-4'>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Agregar
