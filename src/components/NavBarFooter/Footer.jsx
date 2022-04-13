import React from "react";


export default function Footer() {

    return(
        <div className="footerGrid">
            <div className="fg1">
            <br/>
                <h4 className="fondo">REDES SOCIALES</h4>
                <p className="fondo">Instagram: @XCXclothes</p>
                <p className="fondo">Facebook: Clothes XCX</p>
            </div>
            <form className="fg2">
                <br/>
                <h4 className="fondo">NEWSLETTER</h4>
                <label htmlFor="" className="fondo">Email:</label>
                <input className="fondo" type="text" placeholder="INGRESE SU EMAIL" />
                <br />
                <button className="fondo sus">SUSCRIBIRSE</button>
            </form>
        </div>
    )
}