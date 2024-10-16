import React from "react";
import '../Style/HotDogs.css';
import Crunchy from '../Component/Crunchy';

const HotDogs = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">MENÚ</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">SNACKS</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>PAPAS A LA FRANCESA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 40</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    200 grs <br />
                </p>
                <div className="item-name">
                    <span><strong>PAPAS GAJOS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 45</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    200 grs <br />
                </p>

                <div className="item-name">
                    <span><strong>AROS DE CEBOLLA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 45</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    10 pzs <br />
                </p>

                <div className="item-name">
                    <span><strong>PALOMITAS DE POLLO</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 55</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    200 grs <br />
                </p>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ NATURALES <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ MANGO HABANERO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ FRESA HABANERO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ PELÓN PELO RICO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ BBQ <br />
                </p>

                <div className="item-name">
                    <span><strong>PALITOS DE QUESO MOZZARELLA</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 80</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    6 pzs <br />
                </p>

                <div className="item-name">
                    <span><strong>NUGGETS DE POLLO</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 45</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    8 pzs <br />
                </p>

                <div className="item-name">
                    <span><strong>BONELESS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 80</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    200 grs <br />
                </p>

                <div className="item-name">
                    <span><strong>SALCHIPAPAS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 50</strong></span>
                </div>
            </div>
        </div>
    )
}

export default HotDogs;