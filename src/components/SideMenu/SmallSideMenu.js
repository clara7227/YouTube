import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

//NOTAS:
//PASAR PARÁMETROS POR LOS FORMULARIOS
class SideMenu extends Component {
  render() {
    return (
      <div className="SmallSideMenu">
        <ul>
          <li>
            <a href="#" className="IconSmallSideMenu">
              <MaterialSymbol icon="home" weight={200}size={34} grade={-25} />
            </a>
            <p> Inicio</p>
          </li>
          <li>
            <a href="#" className="IconSmallSideMenu">
              <MaterialSymbol icon="camera"weight={200} size={34} grade={-25} />
            </a>
            <p> Shorts</p>
          </li>
          <li>
            <a href="#" className="IconSmallSideMenu">
              <MaterialSymbol icon="subscriptions"weight={200} size={34} grade={-25} />
            </a>
            <p> Subscripciones</p>
          </li>
          <li>
            <a href="#" className="IconSmallSideMenu">
              <MaterialSymbol icon="people"weight={200} size={34} grade={-25} />
            </a>
            <p> Bibliotecas</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default SideMenu;
