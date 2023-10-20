import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

const MoreOptions = ({ user }) => (
<div className="SideMenuPart">
              <div className="TitleSideMenuPart">MÁS SOBRE YOUTUBE</div>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="theaters" size={20} grade={-25} />
                </a>
                <div className="Text">YouTube Premium</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" size={20} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" size={20} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
              <li className="ItemSideMenu">
                <a href="#" className="IconSideMenu">
                  <MaterialSymbol icon="youtube_activity" size={20} grade={-25} />
                </a>
                <div className="Text">Películas de Youtube</div>
              </li>
            </div>

    );
    
    export default MoreOptions