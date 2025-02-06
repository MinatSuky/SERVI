import React from 'react'
import BarraPagePrincipal from '../Componetes/BarraPagePrincipal'


const PagePrincipal = () => {
    return (
        <div className='container3'>
            <BarraPagePrincipal />
            <div className='SesionPagePrincipal flex'>
                {/* Sección 1: Imagen */}
                <div className="w-[50%] Contenedor2 flex flex-col justify-center items-center">
                    <p className='text-[#3259E6] font-bold text-3xl'> ESPECTACULAR !</p>
                    <p className='text-gray-600 text-lg'>Ya eres Miembro :)</p>
                    <p className='text-gray-600 text-lg'>Ahora puedes registrar cualquiera de tus vehiculos</p>
                    <img
                        className="w-[80%]"
                        style={{ transform: "scaleX(-1)" }}
                        src="https://doodleipsum.com/700/hand-drawn?i=0e05d2d124e0a86b24727ce6006b739a"
                        alt="Super Idea by Irene Falgueras"
                    />
                </div>
                <div className="w-[50%] Contenedor1 flex flex-col justify-center items-center">
                    <div className="flex w-full flex-col items-center justify-center gap-10">
                        <div className=' shadow-lg hover:shadow-xl hover:shadow-indigo-300 duration-300 w-[75%] cursor-pointer h-[12vh] rounded-3xl flex justify-center gap-7 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 32 32"><path fill="#4f46e5" d="M22.5 6a1.48 1.48 0 0 0-1.406 1H17v2h4.25l.313 1H18c-2.61 0-3.922 1.406-4.406 2h-3.375A7.4 7.4 0 0 0 6.5 11c-2.16 0-3.938.844-3.938.844l.876 1.812S4.867 13 6.5 13c.809 0 1.57.246 2.125.469L7.75 15.28A6 6 0 0 0 6 15c-3.309 0-6 2.691-6 6s2.691 6 6 6a5.986 5.986 0 0 0 5.906-5h3.469c.758 0 1.477-.441 1.813-1.125h-.032l1.094-2.219c1.664-.765 3.02-2.093 3.969-3.343c.261-.344.484-.66.687-.97l2.125 6.938l1.938-.562l-1.125-3.688c.054-.004.101-.031.156-.031c2.207 0 4 1.793 4 4s-1.793 4-4 4a4.003 4.003 0 0 1-2.906-6.75l-.625-2.094A6 6 0 0 0 20 21c0 3.309 2.691 6 6 6s6-2.691 6-6s-2.691-6-6-6a6 6 0 0 0-.781.063L23.375 9H25V6zM18 12h4a17 17 0 0 1-1.375 2.094c-.93 1.219-2.223 2.515-3.469 2.969l-.406.125l-.156.375L15.375 20H6v2h3.844C9.398 23.723 7.859 25 6 25c-2.207 0-4-1.793-4-4s1.793-4 4-4c1.473 0 2.742.809 3.438 2h2.218a6.04 6.04 0 0 0-2.125-2.844L10.625 14h3.906l.313-.438S15.813 12 18 12" /></svg>
                            <p className='text-black font-bold text-3xl'>cicla</p>
                        </div>
                        <div className=' shadow-lg hover:shadow-xl hover:shadow-indigo-300 duration-300 w-[75%] cursor-pointer h-[12vh] rounded-3xl flex justify-center gap-7 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 640 512"><path fill="#4f46e5" d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6l-55.1-102H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-20.4c-7.5 0-14.7 2.6-20.5 7.4l-47.4 39.5l-14-26c-7-12.9-20.5-21-35.2-21zm182.7 279.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8M187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4c-11.2-59.2-63.2-104-125.7-104C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104h-66.4zm-59.3 8a32 32 0 1 0 0-64a32 32 0 1 0 0 64"/></svg>
                            <p className='text-black font-bold text-3xl'>Moto</p>
                        </div>
                        <div className=' shadow-lg hover:shadow-xl hover:shadow-indigo-300 duration-300 w-[75%] cursor-pointer h-[12vh] rounded-3xl flex justify-center gap-7 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16"><path fill="#4f46e5" fill-rule="evenodd" d="M5.5 11H4.419l-.342 1.026l-.158.474H2V9.52c.496.129 1.213.23 2.25.23a.75.75 0 1 0 0-1.5c-1.073 0-1.682-.12-1.998-.217a2 2 0 0 1-.204-.075a1.8 1.8 0 0 1 .485-.87q.11-.11.214-.228C4.272 7.293 6.15 7.5 8 7.5s3.728-.207 5.253-.64q.103.119.214.228c.241.242.408.544.485.87q-.066.032-.204.075c-.316.097-.925.217-1.998.217a.75.75 0 0 0 0 1.5c1.037 0 1.754-.101 2.25-.23v2.98h-1.919l-.158-.474L11.581 11zm6.924-5.472C11.144 5.838 9.584 6 8 6s-3.144-.162-4.424-.472q.046-.112.088-.226l.448-1.257c.18-.505.57-.806.96-.863a20.8 20.8 0 0 1 5.855 0c.392.057.78.358.96.863l.45 1.257q.04.114.087.226m-1.652 7.788L10.5 12.5h-5l-.272.816a1 1 0 0 1-.949.684H1.5a1 1 0 0 1-1-1V8.375c0-.88.35-1.725.972-2.347a3.3 3.3 0 0 0 .43-.528H1.25a.75.75 0 1 1 0-1.5h1.286l.164-.46c.343-.96 1.148-1.696 2.157-1.842a22.3 22.3 0 0 1 6.286 0c1.009.146 1.814.882 2.157 1.843l.164.459h1.286a.75.75 0 0 1 0 1.5h-.651q.187.286.429.528a3.32 3.32 0 0 1 .972 2.347V13a1 1 0 0 1-1 1h-2.78a1 1 0 0 1-.948-.684" clip-rule="evenodd"/></svg>
                            <p className='text-black font-bold text-3xl'>Auto</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PagePrincipal


