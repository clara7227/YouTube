import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import Recommended2 from "../../Recommended/Recommended2.js";
import MoreButtonInterface from "./MoreButtonInterface.js";

function MoreButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("Botón clickeado");
    setIsOpen(prevIsOpen => !prevIsOpen); // Actualiza el estado basado en el estado actual prevIsOpen
  };
  
  // MoreButtonContainer
  return (
    <div className="MoreButtonContainerEmpty">
     
        <div className="MoreButtonAction"></div>
       
        {isOpen ? (
        
            <Recommended2 />
            
          
        ) : (
        
        <div></div>
        )}
         <button onClick={toggleMenu} id="IconMore">
        <MoreButtonInterface
                title={!isOpen ? "Mostrar más" : "Mostrar menos"}
                icon={isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              />
      </button>
        
    </div>
  );
}

export default MoreButton;

//<div className="MoreButtonLine"></div>
//<div className="MoreButtonLine"></div> debajo de cada boton (no dio tiempo)