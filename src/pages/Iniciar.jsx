import React from 'react';
import BarraPincipal from "../Componetes/BarraPincipal";
import { Link } from 'react-router-dom';

const Iniciar = () => {
    return (
        <div className="Container">
            {/* Navegador */}
            <BarraPincipal />
            <section className="flex SeccionIniciar">
                {/* Sección 1: LOGIN */}
                <div className="w-[50%] Contenedor1 flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full max-w-md bg-white p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Iniciar Sesion</h2>
                            <form className="flex flex-col">
                                <input
                                    type="email"
                                    className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Email address"
                                />
                                <input
                                    type="password"
                                    className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Password"
                                />
                                <div className="flex items-center justify-between flex-wrap">
                                    <label htmlFor="remember-me" className="text-sm font-semibold opacity-85 flex no-wrap items-center text-gray-900 cursor-pointer">
                                        <input type="checkbox" id="remember-me" className="mr-2" />
                                        Recordarme
                                    </label>
                                    <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5 font-semibold opacity-85">Olvidaste la Contraseña?</a>
                                    <p className="text-gray-900 mt-4 font-semibold opacity-85">
                                        Todavia no eres Miembro?
                                        <Link to={'/Registro'}>
                                            <a href="#" className="text-sm font-semibold opacity-85  text-blue-500 hover:underline mt-4">Registrate</a>
                                        </Link>
                                    </p>
                                </div>
                                <Link className="bg-gradient-to-r text-center from-indigo-400 to-purple-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" to={'/PagePrincipal'}>
                                    <button>
                                        Iniciar
                                    </button>
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
                {/* Sección 2: Imagen */}
                <div className="w-[50%] Contenedor2 flex justify-center items-center">
                    <img
                        className="w-[80%]"
                        style={{ transform: "scaleX(-1)" }}
                        src="https://doodleipsum.com/700/hand-drawn?i=4a51d1ffc4e6797c11a5b4c7cc33cda6"
                        alt="Super Idea by Irene Falgueras"
                    />
                </div>
            </section>
        </div>
    );
}

export default Iniciar;
