import React, { useState, useEffect } from 'react';
import '../Style/Header.css';
import logo from '../Imagen/LOGOAMARILLO.png';
import Hamburguesa from './Hamburguesa';
import HotDogs from './HotDogs';
import Snacks from './Snacks';
import Alitas from './Alitas';
import Bebidas from './Bebidas';
import ComboHamburguesa from './ComboHamburguesa';
import ComboSnacks from './ComboSnacks';

const Header = () => {
    const [selectedComponent, setSelectedComponent] = useState('Hamburguesa');
    const [showCombos, setShowCombos] = useState(false); // Controla si se muestran los combos

    useEffect(() => {
        document.body.classList.add('menu-open');
    }, []);

    const handleMenuClick = (component) => {
        setSelectedComponent(component);
        setShowCombos(false); // Cierra el menú de combos al seleccionar otro componente
    };

    const toggleCombos = () => {
        setShowCombos(!showCombos); // Alterna la visibilidad de los combos
    };

    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Logo" className="logo" />
                <nav>
                    <ul>
                        <li>
                            <a href="#hamburguesa" onClick={() => handleMenuClick('Hamburguesa')}>
                                <h2>Hamburguesa</h2>
                            </a>
                        </li>
                        <li>
                            <a href="#hotdogs" onClick={() => handleMenuClick('HotDogs')}>
                                <h2>Hot Dogs</h2>
                            </a>
                        </li>
                        <li>
                            <a href="#snacks" onClick={() => handleMenuClick('Snacks')}>
                                <h2>Snacks</h2>
                            </a>
                        </li>
                        <li>
                            <a href="#alitas" onClick={() => handleMenuClick('Alitas')}>
                                <h2>Alitas</h2>
                            </a>
                        </li>
                        <li>
                            <a href="#bebidas" onClick={() => handleMenuClick('Bebidas')}>
                                <h2>Bebidas</h2>
                            </a>
                        </li>
                        <li>
                            <a href="#combos" onClick={toggleCombos}>
                                <h2>Combos</h2>
                            </a>
                            {/* Desplegar lista de combos si está activo */}
                            {showCombos && (
                                <ul className="submenu">
                                    <li>
                                        <a href="#combo-hamburguesa" onClick={() => handleMenuClick('ComboHamburguesa')}>
                                            Combo Hamburguesa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#combo-snacks" onClick={() => handleMenuClick('ComboSnacks')}>
                                            Combo Snacks
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="#combo-hotdogs" onClick={() => handleMenuClick('ComboHotDogs')}>
                                            Combo Hot Dogs
                                        </a>
                                    </li> */}
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="menu-content">
                {selectedComponent === 'Hamburguesa' && <Hamburguesa />}
                {selectedComponent === 'HotDogs' && <HotDogs />}
                {selectedComponent === 'Snacks' && <Snacks />}
                {selectedComponent === 'Alitas' && <Alitas />}
                {selectedComponent === 'Bebidas' && <Bebidas />}

                {/* Mostrar contenido según el combo seleccionado */}
                {selectedComponent === 'ComboHamburguesa' && <ComboHamburguesa/>}
                {selectedComponent === 'ComboSnacks' && <ComboSnacks/>}
                {/* {selectedComponent === 'ComboHotDogs' && <p>Combo Hot Dogs</p>} */}
            </div>
        </header>
    );
};

export default Header;
