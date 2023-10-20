import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import Subs from "./Subs";
import Principal from "./Principal";
import UserAreaSide from "./UserAreaSide";
import MoreOptions from "./MoreOptions";

//NOTAS:
//PASAR PARÁMETROS POR LOS FORMULARIOS
class SideMenu extends Component {
  render() {
       return (
      <div className="SideMenu">
        <ul>
          <Principal />
          <UserAreaSide />
          <Subs />
          <MoreOptions />
        </ul>
      </div>
    );
  }
}
export default SideMenu;
