import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import RecommendedItem from "./RecommendedItem";
import Imagen1 from "../../img/img1.JPG";
import Imagen2 from "../../img/img2.JPG";
import Imagen3 from "../../img/img3.JPG";
import Imagen4 from "../../img/img4.JPG";
import Imagen5 from "../../img/img5.JPG";
import Imagen6 from "../../img/img6.JPG";
import MoreButton from "../MainMenu/MenuToggle/MoreButton";

class Recommended extends Component {
  render() {
    return (
      <div>
    
        <div className="ContainerRecommended">
          <RecommendedItem img={Imagen1} title="A Detective tricks Guilty Suspect into Confession" /> 
          <RecommendedItem img={Imagen2} title="Why the very strange How I Met Your Mother Spinoff failed"/>
          <RecommendedItem img={Imagen3} title="Every Glee's character best and worst performance"/>
          <RecommendedItem img={Imagen4} title="Salitre y Humo" />
          <RecommendedItem img={Imagen5} title="pop culture moments we don't talk abput enough"/>
          <RecommendedItem img={Imagen6} title="Phoebe Waller-Bridge plays unpopular opinion"/>
        
        </div>
         <MoreButton/>
      </div>
    );
  }
}
export default Recommended;
/*  <RecommendedItem img={Imagen7} title="The dog of a groomers nightmare"/>
          <RecommendedItem img={Imagen8} title="¿Qué pasaría si Júpiter fuera del tamaño de la tierra?"/>*/