import React, { useState } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

function MenuButton(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  //const {toggleMenu} = props;
  //el border es parahacer que sea mas fino
  return (
    <div className="Icon">
      <button onClick={() => props.toggleMenu()} id="IconMenu">
        <MaterialSymbol
          icon="Menu"
          size={26}
          weight={200}
          fill
          grade={-25}
        ></MaterialSymbol>
      </button>
      {/* {isOpen ? (
        <div className="MenuContent">
            <SideMenu/>
            <div class="black-bg"></div>
        </div>
      ) : <div className="MenuContent"> <SmallSideMenu /></div>} */}
    </div>
  );
}

export default MenuButton;
