import React from "react";

export default function Saludar({nombre, apellido}) {

    let nombreCompleto = nombre + " " + apellido;

    return(
        <>

        <p>Hola como andas {nombre} </p>
        
        </>
    )
}