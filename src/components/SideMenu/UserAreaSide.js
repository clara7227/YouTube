import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const UserAreaSide = ({ user }) => (
    <div className="SideMenuPart">
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="video_library" size={20} grade={-25} />
      </a>
      <div className="Text">Biblioteca</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="history" size={20} grade={-25} />
      </a>
      <div className="Text">Historial</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="smart_display" size={20} grade={-25} />
      </a>
      <div className="Text">Tus vídeos</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="watch_later" size={20} grade={-25} />
      </a>
      <div className="Text">Ver más tarde</div>
    </li>
    <li className="ItemSideMenu">
      <a href="#" className="IconSideMenu">
        <MaterialSymbol icon="thumb_up" size={20} grade={-25} />
      </a>
      <div className="Text">Vídeos que me gustan</div>
    </li>
  </div>

    );
    
    export default UserAreaSide