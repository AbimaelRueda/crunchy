import React from 'react';
import '../Style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="bank-info">
                    <span>BBVA&nbsp;&nbsp;&nbsp;&nbsp;4152313711460977&nbsp;&nbsp;&nbsp;&nbsp;MAURICIO HERNÁNDEZ</span>
                </div>
                <div className="info-boxes">
                    <div className="info-box">
                        <h4>Dirección</h4>
                        <p>Av. 135 Pte. #335</p>
                        <p>Villa Alberta</p>
                    </div>
                    <div className="info-box">
                        <h4>Horario</h4>
                        <p>Lunes a Domingo: </p>
                        <p>1:00 PM - 9:30 PM </p>
                    </div>
                    <div className="info-box">
                        <h4>Teléfono</h4>
                        <p>(222) 5136760</p>
                    </div>
                </div>
                <p className="footer-rights">© 2024 Crunchy. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
