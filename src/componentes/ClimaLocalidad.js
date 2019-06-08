

import React from "react";
/**
 * Julysa
 * @param {*} param0 
 */
const ClimaLocalidad=({nombreperfil,tiempo,notificacion})=> {
   


    return (
        <div className="climaLocalidad">
            <h3>  {nombreperfil}</h3>
            <p>Descripcion: {notificacion}</p>
            <img src=""/>
            <span>{tiempo}</span>
            <br/>
            
        </div>
    )
}
    
    
export default  ClimaLocalidad;

