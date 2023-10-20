import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import ShortsItem from "./ShortsItem";
import Imagen1 from "../../img/img1.JPG";
import Imagen2 from "../../img/img2.JPG";
import Imagen3 from "../../img/img3.JPG";
import Imagen4 from "../../img/img4.JPG";
import Imagen5 from "../../img/img5.JPG";
import Imagen6 from "../../img/img6.JPG";
import Imagen7 from "../../img/img7.JPG";
import Imagen8 from "../../img/img8.JPG";
import ytImage from "../../img/yt.png";
import MoreButton from "../MainMenu/MenuToggle/MoreButton";

class Shorts extends Component {
  render() {
    return (
      <div>
        <div className="TitleSection">
            <h3>Shorts</h3>
        </div>
        <div className="ContainerShorts">
          <ShortsItem img={Imagen1} title="A Detective tricks Guilty Suspect into Confession" /> 
          <ShortsItem img={Imagen2} title="Why the very strange How I Met Your Mother Spinoff failed"/>
          <ShortsItem img={Imagen4} title="Salitre y Humo" />
          <ShortsItem img={Imagen5} title="pop culture moments we don't talk abput enough"/>
          <ShortsItem img={Imagen6} title="Phoebe Waller-Bridge plays unpopular opinion"/>
        
        </div>
        
      </div>
    );
  }
}
export default Shorts;