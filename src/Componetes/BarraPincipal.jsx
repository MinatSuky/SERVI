import React, { useState } from 'react';
import logo from "../IMG/BxSpa.png";
import { Link } from 'react-router-dom';
import MenuDesplegable from './MenuDesplegable';
import { motion } from 'framer-motion';

const BarraPincipal = () => {
    const [menu, setMenu] = useState(false);

    const negacion = () => {
        setMenu(!menu);
    };

    return (
        <motion.nav 
            className="fixed w-full z-10 bg-gradient-to-r from-blue-600 to-purple-700 drop shadow-lg overflow-hidden"
            animate={{ height: menu ? 250 : 80 }} // Ajusta la altura dinámica
            transition={{ type: "spring", stiffness: 80 }}
        >   
       
            <div className="flex justify-between items-center px-12 h-[80px]">
                {/* Logo */}
                <Link to={'/'}>
                <div className="Logo flex gap-2 items-center">
                    <img className="imgs" src={logo} alt="Logo" />
                    <p className="ServiText LogoType text-white TextShadow">Sarvi</p>
                </div>
                </Link>
                {/* Botón de menú */}
                <div onClick={negacion} className="Menu cursor-pointer">
                    <span>
                        {menu ?  
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12"/>
                            </svg> 
                            : 
                            <svg className='shadow-lg' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16">
                                <path fill="#ffffff" d="M1 3h14v3H1zm0 4h14v3H1zm0 4h14v3H1z"/>
                            </svg> 
                        } 
                    </span>
                </div>

                {/* Botones de Registro e Inicio */}
                <div className="Botones flex items-center gap-3">
                    <Link to={'/Registro'}>
                        <button className="bg-white text-black py-4 px-10 rounded-lg TextType text-[16px] shadow hover:scale-[1.02] duration-100">
                            Regístrate
                        </button>
                    </Link>
                    <Link to={'/Iniciar'}>
                    <button className="py-4 px-10 rounded-lg TextType text-[16px] shadow border-2 text-white hover:scale-[1.02] duration-100">
                        Inicia Sesión
                    </button>
                    </Link>
                </div>
            </div>

            {/* Menú Desplegable (aparece solo si menu es true) */}
            {menu && (
                <motion.div
                    initial={{ opacity: -20, y: -100 }}
                    animate={{ opacity: 10, y: -70 }}
                    exit={{ opacity: -20, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <MenuDesplegable />
                </motion.div>
            )}
        </motion.nav>
    );
};

export default BarraPincipal;




