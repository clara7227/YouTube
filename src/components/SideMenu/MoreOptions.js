import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const MoreOptions = ({ user }) => (
<div className="SideMenuPart">
              <div className="TitleSideMenuPart">Más sobre youtube</div>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="theaters" weight={200} size={26} grade={-25} />
                </a>
                <div className="Text">YouTube Premium</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" weight={200} size={26} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" weight={200} size={26} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" weight={200} size={26} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
            </div>

    );
    
    export default MoreOptions