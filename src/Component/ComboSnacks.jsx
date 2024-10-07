import React from "react";
import '../Style/Hamburguesa.css';
import Crunchy from '../Component/Crunchy';

const ComboSnacks = () => {
    return (
        <div className="menu-container">
            <Crunchy />
            <h1 className="menu-title">COMBOS</h1>
            <div className="hamburguesa-box">
                <h4 className="hamburguesa-title">SNACKS</h4>
            </div>
            <div className="menu-item">
                <div className="item-name">
                    <span><strong>COMBO 1</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 225</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Papas a la francesa (200 grs) <br />
                    Palitos gajos (200 pzs) <br />
                    Aros de cebolla (10 pzs) <br />
                    Palitos de queso (4 pzs) <br />
                    Palomitas de pollo (200 grs) <br />
                </p>
                <div className="item-name">
                    <span><strong>COMBO 2</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 95</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Papas a la francesa (200 grs) <br />
                    Palitos de queso (2 pzs) <br />
                    Aros de cebolla (6 pzs) <br />
                </p>

                <div className="item-name">
                    <span><strong>COMBO 3</strong></span>
                    <div className="line-container"></div>
                    <span className="item-price"><strong>$ 320</strong></span>
                </div>
                <p className="item-description" style={{ fontSize: '15px' }}>
                    Papas a la francesa (200 grs) <br />
                    Palitos gajos (200 pzs) <br />
                    Booneless (200 grs)
                    Palitos de queso (4 pzs) <br />
                    Aros de cebolla (10 pzs) <br />
                    Palomitas de pollo (200 grs) <br />
                    Nuggets de pollo (24 pzs)
                </p>
            </div>
        </div>
    )
}

export default ComboSnacks;