import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const Principal = ({ user }) => (
    <div className="SideMenuPart">
    <li className="ItemSideMenu" id="ItemSideMenuSelected">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="home" weight={200}size={26} fill grade={-25} />
      </a>
      <div className="Text">Inicio</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="local_fire_department"weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Tendencias</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="subscriptions" weight={200}size={26} grade={-25} />
      </a>
      <div className="Text">Suscripciones</div>
    </li>
  </div>

);

export default Principal 