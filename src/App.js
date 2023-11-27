import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import Recommended from "./components/Recommended/Recommended";
import MenuButton from "./components/MainMenu/MenuToggle/MenuButton";
import Tags from "./components/Recommended/Tags";
import Shorts from "./components/Shorts/Shorts";
import React, { useState } from "react";
import SmallSideMenu from "./components/SideMenu/SmallSideMenu";

//ANIMACIONES SI DA TIEMPO

//PREGUNTAS: ¿Cómo hacer que el menú flotante siga a su icono en todos los viewports?

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="MainMenuContainer ">
          <MenuButton toggleMenu={toggleMenu} />
          <MainMenu />
        </div>
      </header>

      <main>
        {isOpen ? <SideMenu /> : <SmallSideMenu />}
        <div className={isOpen ? "DashboardBigMenu" : "DashboardSmallMenu"}>
          <Tags />
          <Recommended />
          <Shorts />
        </div>
      </main>
    </div>
  );
}

export default App;
