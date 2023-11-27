import "react-material-symbols/dist/rounded.css";
import ytImage from "../../img/yt.png"

const Identity = ({ user }) => (
  <div className="AreaMenu IdentityArea">
    <div className="YouTube">
      <img src={ytImage} alt="Youtube"></img>
    </div>
  </div>
);

export default Identity;