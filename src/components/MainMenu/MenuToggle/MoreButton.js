import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import Recommended2 from "../../Recommended/Recommended2.js";
import MoreButtonInterface from "./MoreButtonInterface.js";

function MoreButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="MoreButtonContainer">
      <button onClick={toggleMenu} id="IconMenu">
        <div className="MoreButtonAction"></div>

        {isOpen ? (
          <div>
            <Recommended2 />
            <div className="MoreButtonStyleContainer">
              <MoreButtonInterface
                title="Mostrar menos"
                icon="keyboard_arrow_up"
              />
              
            </div>
          </div>
        ) : (
        
          <div className="MoreButtonStyleContainer">
            <MoreButtonInterface title="Mostrar más" icon="expand_more" />
            
          </div>
        )}
      </button>
    </div>
  );
}

export default MoreButton;

//<div className="MoreButtonLine"></div>
//<div className="MoreButtonLine"></div> debajo de cada boton (no dio tiempo)