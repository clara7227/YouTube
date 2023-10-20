import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const Subs = ({ user }) => (
    <div className="SideMenuPart">
    <div className="TitleSideMenuPart">SUSCRIPCIONES</div>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="video_call" size={20} grade={-25} />
        </a>
        <div className="Text">Popular en Youtube</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="headset_mic" size={20} grade={-25} />
        </a>
        <div className="Text">Música</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="sports_soccer" size={20} grade={-25} />
        </a>
        <div className="Text">Deportes</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="videogame_asset" size={20} grade={-25} />
        </a>
        <div className="Text">Videojuegos</div>
      </li>
    </div>

    );
    
    export default Subs 