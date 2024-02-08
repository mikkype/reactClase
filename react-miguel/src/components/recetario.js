import React from "react";
import Receta from "./receta";
import Boton from "./Boton";



function Recetario(){

    const recetas = [
    {
        "nombre" :'Recetario',
        "receta" : 'Pizza ',
        "imagen" : "{images}",
        "calorias" : 250,
        "Ingredientes" : [
            "Harina de trigo","PEPERONI","levadura"
        ],

    },
    {

        "nombre" :'Recetario',
        "receta" : 'Pizza Hawaiana',
        "imagen" : "{images}",
        "calorias" : 250,
        "Ingredientes" : [
            "Harina de trigo","piña","levadura"
        ],
    }



    ]

        
   
    return (
        <div>
            <div>
            <h1>recetario</h1>
            <Boton name="suscribirse" mensaje="te has suscrito"></Boton>
            </div>
            
            {
                //llaves para js recorres array
                recetas.map((rec,index)=>{
                    return (
                        //devuelvame receta mandar una prop que se llama receta
                        //ponerle el componente key
                        <Receta receta={rec} key={index}></Receta>
                    )
                })
            }
        </div>
    )
}

export default  Recetario;