import React from 'react'

const MenuPagePeincipalCuenta = () => {
    return (
        <div className="Botones1 px-7 absolute left-0 top-[65px] flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-700 w-[100%] h-[40vh]">
            <div className='w-[30%] rounded-full'>
                <img className='w-full rounded-full shadow-xl cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="" />
            </div>
            <div className='mt-5 w-full'>
                <p className='text-xl text-white flex items-center gap-2 font-semibold'> <samp><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg></samp> Sebastian Gomez Buzon</p>
                <p className='text-xl text-white flex items-center gap-2 font-semibold my-1'> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28 28"><path fill="#ffffff" d="M12.98 3.2a1 1 0 1 0-1.96-.4L9.752 9H4a1 1 0 1 0 0 2h5.343l-1.227 6H3a1 1 0 1 0 0 2h4.707L6.52 24.8a1 1 0 1 0 1.96.4L9.748 19h5.959l-1.187 5.8a1 1 0 1 0 1.96.4l1.268-6.2H23a1 1 0 1 0 0-2h-4.843l1.227-6H24a1 1 0 1 0 0-2h-4.207l1.187-5.8a1 1 0 1 0-1.96-.4L17.752 9h-5.959zM16.116 17h-5.959l1.227-6h5.959z"/></svg></span> 19 años</p>
                <p className='text-xl text-white flex items-center gap-2 font-semibold'> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#ffffff" d="M472 64H40a24.03 24.03 0 0 0-24 24v336a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V88a24.03 24.03 0 0 0-24-24m-8 352H48V96h416Z"/><path fill="#ffffff" d="M184 344a87.1 87.1 0 0 0 54.484-18.891l-19.825-25.119A55.4 55.4 0 0 1 184 312a56 56 0 0 1 0-112a55.4 55.4 0 0 1 34.659 12.01l19.825-25.119A87.1 87.1 0 0 0 184 168a88 88 0 0 0 0 176m163.429 0a87.1 87.1 0 0 0 54.484-18.891l-19.825-25.119A55.4 55.4 0 0 1 347.429 312a56 56 0 0 1 0-112a55.4 55.4 0 0 1 34.659 12.01l19.825-25.119A87.1 87.1 0 0 0 347.429 168a88 88 0 0 0 0 176"/></svg></span> 1069741951</p>
            </div>
            <div className="flex justify-center w-full gap-[25%] mt-4">
                <button className='drop1 border rounded-md py-1 px-5 flex items-center gap-2'> ayuda <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></span> </button>
                <button className='drop1 border rounded-md py-1 px-5 flex items-center gap-2'>Editar <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg></span> </button>
            </div>
            <p className='TextShadow font-serif mt-4 flex items-center gap-2'> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 8 8"><path fill="#ffffff" d="M3 0v1h4v5H3v1h5V0zm1 2v1H0v1h4v1l2-1.5z"/></svg></span> CERRAR SESION</p>

        </div>
    )
}

export default MenuPagePeincipalCuenta