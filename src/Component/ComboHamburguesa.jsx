import React from "react";
import '../Style/Hamburguesa.css';
import Crunchy from '../Component/Crunchy';

const ComboHamburguesa = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">COMBOS</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">HAMBURGUESA</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>COMBO 1</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 125</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Hamburguesa de la casa o arrachera <br />
                    Papas a la francesa
                </p>
                <div className="item-name">
                    <span><strong>COMBO 2</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 160</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Hamburguesa Súper Crunchy <br />
                    Papas a la francesa
                </p>

                <div className="item-name">
                    <span><strong>COMBO 3</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 185</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Hamburguesa hawaiana <br />
                    Palitos de queso mozzarella (2 pzs) <br />
                    Aros de cebolla (4 pzs)
                </p>

                <div className="item-name">
                    <span><strong>COMBO 4</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 100</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Hamburguesa Kids <br />
                    Papas a la francesa <br />
                    Nugets de pollo (2 pzs)
                </p>
            </div>
        </div>
    )
}

export default ComboHamburguesa;