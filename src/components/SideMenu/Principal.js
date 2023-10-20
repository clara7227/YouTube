import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const Principal = ({ user }) => (
    <div className="SideMenuPart">
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="home" size={20} grade={-25} />
      </a>
      <div className="Text">Página principal</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="local_fire_department" size={20} grade={-25} />
      </a>
      <div className="Text">Tendencias</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="subscriptions" size={20} grade={-25} />
      </a>
      <div className="Text">Suscripciones</div>
    </li>
  </div>

);

export default Principal 