import React from "react";
import '../Style/HotDogs.css';
import Crunchy from '../Component/Crunchy';

const Alitas = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">MENÚ</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">SNACKS</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>ALITAS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 70</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    6 Pzs. <br />
                </p>

                <div className="item-name">
                    <span><strong>ALITAS +</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 100</strong></span>
                </div>

                <div className="item-name">
                    <span><strong>PAPAS A LA FRANCESA</strong></span>
                </div>
                <br />
                <br />
                <div className="item-name">
                    <span><strong>ALITAS +</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 110</strong></span>
                </div>

                <div className="item-name">
                    <span><strong>ORDEN DE AROS DE CEBOLLA</strong></span>
                </div>
                <br />
                <br />

                <div className="item-name">
                    <span><strong>SALSAS</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 55</strong></span>
                </div>

                <p className="item-description" style={{ fontSize: '15px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ MANGO HABANERO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ TAMARINDO <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ RANCH <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ BÚFALO <br />
                </p>
            </div>
        </div>
    )
}

export default Alitas;