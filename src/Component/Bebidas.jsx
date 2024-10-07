import React from "react";
import '../Style/Bebidas.css';
import Crunchy from '../Component/Crunchy';

const Bebidas = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">MENÚ</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">BEBIDAS</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>AGUAS DE SABOR 1 LT</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 40</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ LIMÓN <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ PEPINO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ PIÑA <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ JAMAICA <br />
                </p>

                <div className="item-name">
                    <span><strong>REFRESCO EN LATA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 75</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    500 Ml. <br />
                </p>
            </div>
        </div>
    )
}

export default Bebidas;