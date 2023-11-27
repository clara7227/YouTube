import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const Subs = ({ user }) => (
    <div className="SideMenuPart">
    <div className="TitleSideMenuPart">Suscripciones</div>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="video_call" weight={200} size={26} grade={-25} />
        </a>
        <div className="Text">Popular en Youtube</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="headset_mic" weight={200} size={26} grade={-25} />
        </a>
        <div className="Text">Música</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="sports_soccer" weight={200} size={26} grade={-25} />
        </a>
        <div className="Text">Deportes</div>
      </li>
      <li className="ItemSideMenu">
        <a href="#" className="IconSideMenu">
          <MaterialSymbol icon="videogame_asset" weight={200} size={26} grade={-25} />
        </a>
        <div className="Text">Videojuegos</div>
      </li>
    </div>

    );
    
    export default Subs 