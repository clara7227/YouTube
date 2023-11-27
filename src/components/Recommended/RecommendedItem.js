import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import RecommendedItemContent from "./RecommendedItemContent";

class RecommendedItem extends Component {
  render() {
    return (
      <div className="Video">
        <div>
          <img className="ImgRecomendados" src={this.props.img} alt="Imagen-Video-Recomendado"/>
        </div>
        <div>
          <div className="ContainerTitleIcon">
            <img className="IconUser" src={this.props.img} alt="Avatar-Usuario"></img>
            <div className="WrittenContentVideo">
              <RecommendedItemContent title={this.props.title} />
              <p className="UserVideo">Estirando el chicle</p>
              <div className="InfoVideo">
                <p>12 K visualizaciones ·</p>
                <p> hace 5 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecommendedItem;
