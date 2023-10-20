import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import Recommended from "./components/Recommended/Recommended";
import MenuButton from "./components/MainMenu/MenuToggle/MenuButton";
import Tags from "./components/Recommended/Tags";
import Shorts from "./components/Shorts/Shorts"

//NOTAS:
//PASAR PARÁMETROS POR LOS FORMULARIOS


//TAREAS
//RECOGER MENU - done
//TOOLTIPS - done
//MENU FLOTANTE - done 
//DATOS ACOPLADOS
//MOSTRAR MAS - done

//TERMINAR DE PERFILAR CSS - done

//ANIMACIONES SI DA TIEMPO

//PREGUNTAS: ¿Cómo hacer que el menú flotante siga a su icono en todos los viewports?

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="MainMenuContainer ">
          <MenuButton />
          <MainMenu />
        </div>
      </header>
      
      <main>
      <Tags />
        <Recommended />
        <Shorts />
      </main>
    </div>
  );
}

export default App;
