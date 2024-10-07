import React from "react";
import '../Style/HotDogs.css';
import Crunchy from '../Component/Crunchy';

const HotDogs = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">MENÚ</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">HOT DOGS</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>DE LA CASA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 45</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Salchicha jumbo, cebolla caramelizada, <br />
                    zanahoria, ketchup, mayonesa de la casa, <br />
                    mostaza, jitomate y picnate
                </p>
                <div className="item-name">
                    <span><strong>COMBO DE HOT DOGS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 80</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    ★ De la casa <br />
                    ★ Papas a la Francesa
                </p>

                <div className="item-name">
                    <span><strong>BANDERILLAS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 35</strong></span>
                </div>
                <br />
                <br />

                <div className="item-name">
                    <span><strong>BANDERILLAS +</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 70</strong></span>
                </div>

                <div className="item-name">
                    <span><strong>PAPAS A LA FRANCESA</strong></span>
                </div>
            </div>
        </div>
    )
}

export default HotDogs;