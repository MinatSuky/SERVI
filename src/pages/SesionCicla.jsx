import React from 'react'
import BarraPagePrincipal from '../Componetes/BarraPagePrincipal'
import ImgCicla from '../IMG/IMGcicla.png'

const SesionCicla = () => {
    return (
        <div className='container3 mb-10'>
            <BarraPagePrincipal />

            <div className='SesionPagePrincipal flex '>
                {/* Sección 1: Imagen */}
                <div className="w-[50%] h-[110%] Contenedor2 flex flex-col justify-center items-center">
                    <p className='text-[#3259E6] text-3xl'>SESION CICLA</p>
                    <p className='text-gray-600 text-lg'>¡Registra tu Cicla!</p>
                    <img
                        className="w-[80%]"
                        src={ImgCicla}
                        alt="Super Idea by Irene Falgueras"
                    />
                </div>
                <div className="w-[50%] Contenedor1  flex flex-col justify-center items-center">
                    <div className='Invisibles mb-20'>
                        <p className='text-[#3259E6] text-3xl'>SESION CICLA</p>
                        <p className='text-gray-600 text-center text-lg'>¡Registra tu Cicla!</p>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-10">
                        <div className='border w-[90%] ciclaSesion shadow-lg hover:shadow-xl h-[11vh] rounded-lg flex justify-between px-3 gap-3 items-center'>
                            <img className='w-[15%]' src="https://http2.mlstatic.com/D_NQ_NP_824690-MCO52026661218_102022-O.webp" alt="" />
                            <p className='text-black NameCiclas no-wrap cursor-default text-3xl'>Venzo rin 29</p>
                            <div className="flex justify-center">
                                <div class="group ButonSesionCicla relative rounded-full">
                                    <svg className='bg-black cursor-pointer rounded' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 21v-2h2v2zm-2-2v-5h2v5zm8-3v-4h2v4zm-2-4v-2h2v2zM5 14v-2h2v2zm-2-2v-2h2v2zm9-7V3h2v2zM4.5 7.5h3v-3h-3zM3 9V3h6v6zm1.5 10.5h3v-3h-3zM3 21v-6h6v6zM16.5 7.5h3v-3h-3zM15 9V3h6v6zm2 12v-3h-2v-2h4v3h2v2zm-4-7v-2h4v2zm-4 0v-2H7v-2h6v2h-2v2zm1-5V5h2v2h2v2zM5.25 6.75v-1.5h1.5v1.5zm0 12v-1.5h1.5v1.5zm12-12v-1.5h1.5v1.5z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">QR</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                                <div class="group relative ButonSesionCicla rounded-full">
                                    <svg className='bg-cyan-500 cursor-pointer rounded EDITAR mx-5' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="m21.561 5.318l-2.879-2.879A1.5 1.5 0 0 0 17.621 2c-.385 0-.768.146-1.061.439L13 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06M11.5 14.672L9.328 12.5l6.293-6.293l2.172 2.172zm-2.561-1.339l1.756 1.728L9 15zM16 19H5V8h6l-3.18 3.18c-.293.293-.478.812-.629 1.289c-.16.5-.191 1.056-.191 1.47V17h3.061c.414 0 1.108-.1 1.571-.29c.464-.19.896-.347 1.188-.64L16 13zm2.5-11.328L16.328 5.5l1.293-1.293l2.171 2.172z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">Editar</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                                <div class="group relative ButonSesionCicla rounded-full">
                                    <svg className='bg-red-500 cursor-pointer rounded' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">Eliminar</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border w-[90%] ciclaSesion shadow-lg hover:shadow-xl h-[11vh] rounded-lg flex justify-between px-3 items-center'>
                            <img className='w-[10%]' src="https://ciudadmovilcolombia.com/wp-content/uploads/2022/11/GW-Lynx-8V-R29-.png" alt="" />
                            <p className='text-black NameCiclas no-wrap cursor-default text-3xl'>GW Lynx</p>
                            <div className="flex">
                                <div class="group relative ButonSesionCicla rounded-full">
                                    <svg className='bg-black cursor-pointer rounded' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 21v-2h2v2zm-2-2v-5h2v5zm8-3v-4h2v4zm-2-4v-2h2v2zM5 14v-2h2v2zm-2-2v-2h2v2zm9-7V3h2v2zM4.5 7.5h3v-3h-3zM3 9V3h6v6zm1.5 10.5h3v-3h-3zM3 21v-6h6v6zM16.5 7.5h3v-3h-3zM15 9V3h6v6zm2 12v-3h-2v-2h4v3h2v2zm-4-7v-2h4v2zm-4 0v-2H7v-2h6v2h-2v2zm1-5V5h2v2h2v2zM5.25 6.75v-1.5h1.5v1.5zm0 12v-1.5h1.5v1.5zm12-12v-1.5h1.5v1.5z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">QR</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                                <div class="group relative ButonSesionCicla rounded-full">
                                    <svg className='bg-cyan-500 cursor-pointer rounded EDITAR mx-5' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="m21.561 5.318l-2.879-2.879A1.5 1.5 0 0 0 17.621 2c-.385 0-.768.146-1.061.439L13 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06M11.5 14.672L9.328 12.5l6.293-6.293l2.172 2.172zm-2.561-1.339l1.756 1.728L9 15zM16 19H5V8h6l-3.18 3.18c-.293.293-.478.812-.629 1.289c-.16.5-.191 1.056-.191 1.47V17h3.061c.414 0 1.108-.1 1.571-.29c.464-.19.896-.347 1.188-.64L16 13zm2.5-11.328L16.328 5.5l1.293-1.293l2.171 2.172z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">Editar</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                                <div class="group relative ButonSesionCicla rounded-full">
                                    <svg className='bg-red-500 cursor-pointer rounded' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ffffff" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z" /></svg>
                                    <div class="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute -top-5 -translate-y-full left-1/2 -translate-x-1/2">
                                        <span class=" whitespace-nowrap">Eliminar</span>
                                        <div class="bg-inherit rotate-45 p-1 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[90%] border-2 ciclaSesion cursor-pointer h-[11vh] rounded-lg flex justify-center gap-8 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 14 14"><g fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.19v4.62M3.19 5.5h4.62" /><rect width="10" height="10" x=".5" y=".5" rx="1" /><path d="M3.5 13.5h9a1 1 0 0 0 1-1v-9" /></g></svg>
                            <p className='text-black font-semibold text-xl'>Agregar</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SesionCicla
