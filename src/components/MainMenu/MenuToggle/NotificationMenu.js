import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import NotificationMenuItem from "./NotificationMenuItem";
import Imagen1 from "../../../img/img1.JPG";
import Imagen2 from "../../../img/img2.JPG";
import Imagen3 from "../../../img/img3.JPG";
import Imagen4 from "../../../img/img4.JPG";
import Imagen5 from "../../../img/img5.JPG";

//NOTAS:
//PASAR PARÁMETROS POR LOS FORMULARIOS
class SideMenu extends Component {
  render() {
    return (
      <div className="NotificationMenu">
       <div class="NotificationTitleContainer">
        <h3 className="NotificationTitle">Notificaciones</h3>
        <a href="#" className="NotificationSettingIcon">
          <MaterialSymbol icon="Settings" size={20} fill grade={-25} />
        </a>
        </div>
        <ul className="NotificationMenuItems">
          <li><NotificationMenuItem img={Imagen1}/></li>
          <li><NotificationMenuItem img={Imagen2}/></li>
          <li><NotificationMenuItem img={Imagen3}/></li>
          <li><NotificationMenuItem img={Imagen4}/></li>
          <li><NotificationMenuItem img={Imagen5}/></li>
        </ul>
      </div>
    );
  }
}
export default SideMenu;
