import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import Imagen1 from "../../img/yt.png";
import ShortsItemContent from "./ShortsItemContent";

class ShortsItem extends Component {
  render() {
    return (
      <div>
        <div>
          <img class="ImgShorts" src={this.props.img} />
        </div>
        <ShortsItemContent title={this.props.title}/>
      </div>
    );
  }
}
export default ShortsItem;