import React from "react";
import images from "../assets/img/pizza.jpg";
import Boton from "./Boton";

//recibe una propiedad
function Receta({receta}){
    
    return (
        <>
        <h2>{receta.nombre}</h2>
        <div style={receta.theme}>
            <img alt="" src={images} className="pizza" />
           <h4>{receta.receta}</h4>
           <ul>
            {receta.Ingredientes.map((ingred )=>(
                <li>{ingred}</li>))}
            </ul>
                
            

        </div>
        <Boton name="me gusta" mensaje="no me ha hustado"></Boton>
        <Boton name="no me gusta"  mensaje="no me no hustado"></Boton>
        </>
    )
}


export default  Receta;