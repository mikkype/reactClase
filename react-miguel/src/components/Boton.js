import React from "react";

function Boton({ name, mensaje }){
    return(
        <button onClick={
            () => { alert(mensaje) }}>{name}</button>
    )
}

export default Boton;