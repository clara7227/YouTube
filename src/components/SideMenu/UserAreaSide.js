import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const UserAreaSide = ({ user }) => (
    <div className="SideMenuPart">
       <div className="TitleSideMenuPart">Tú</div>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="video_library" weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Biblioteca</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="history" weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Historial</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="smart_display" weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Tus vídeos</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="watch_later" weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Ver más tarde</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="thumb_up" weight={200} size={26} grade={-25} />
      </a>
      <div className="Text">Vídeos que me gustan</div>
    </li>
  </div>

    );
    
    export default UserAreaSide