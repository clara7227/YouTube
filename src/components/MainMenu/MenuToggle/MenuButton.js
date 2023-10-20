import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import SideMenu from "../../SideMenu/SideMenu";
import SmallSideMenu from "../../SideMenu/SmallSideMenu";

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Icon" >
      <button onClick={toggleMenu} id="IconMenu" >
        <MaterialSymbol icon="Menu" size={20} fill grade={-25} />
      </button>
      {isOpen ? (
        <div className="MenuContent">
            <SideMenu/>
            <div class="black-bg"></div>
        </div>
      ) : <div className="MenuContent"> <SmallSideMenu /></div>}
    </div>
  );
}

export default MenuButton;
