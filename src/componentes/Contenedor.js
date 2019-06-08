import React from "react";
import ListadoLocalidad from "./ListadoLocalidad";
import ClimaDetalle from "./ClimaDetalle";

/**
 * Vane
 */
const Contenedor = () => (
 <div className="contenedor">
    <div> FACEBOOK</div>
    <div className="contenido">   
        <ListadoLocalidad></ListadoLocalidad>
        <ClimaDetalle></ClimaDetalle>
        </div>
       
    </div>


);
  
export default Contenedor;






