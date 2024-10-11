import React from "react";
import '../Style/Hamburguesa.css';
import Crunchy from '../Component/Crunchy';

const Hamburguesa = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">MENÚ</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">HAMBURGUESA</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>DE LA CASA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 95</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne de sirloin, mayonesa de la casa, <br />
                    cebolla caramelizada, pepinillos.
                </p>
                <div className="item-name">
                    <span><strong>KIDS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 55</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne mixta, queso amarillo, lechuga, <br />
                    jitomate, ketchupt, mayonesa.
                </p>

                <div className="item-name">
                    <span><strong>ARRACHERA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 95</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne de arrachera, mayonesa de la <br />
                    casa, cebolla caramelizada y pepinillos.
                </p>

                <div className="item-name">
                    <span><strong>HAWAIANA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 115</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne de arrachera ó sirloin, mayonesa <br />
                    de la casa, cebolla caramelizada, <br />
                    pepinillos, piña y jamón.
                </p>

                <div className="item-name">
                    <span><strong>CRUNCHY</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 115</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne de sirloin o arrachera, aros de <br />
                    cebolla, mayonesa de la casa y pepinillos. <br />
                </p>

                <div className="item-name">
                    <span><strong>SÚPER CRUNCHY</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 135</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Carne de sirloin ó arrachera, salchicha, <br />
                    tocino, champiñones, jamón, queso <br />
                    amarillo, cebolla caramelizada, salsa BBQ, <br />
                    mayonesa de la casa<br />
                </p>
            </div>
        </div>
    )
}

export default Hamburguesa;