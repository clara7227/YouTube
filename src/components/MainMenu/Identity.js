import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import ytImage from "../../img/yt.png"
import MenuButton from "./MenuToggle/MenuButton";

const Identity = ({ user }) => (
  <div className="AreaMenu IdentityArea">
    <div className="YouTube">
      <img src={ytImage} alt="Youtube"></img>
    </div>
  </div>
);

export default Identity;