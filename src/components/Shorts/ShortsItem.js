import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import ShortsItemContent from "./ShortsItemContent";

class ShortsItem extends Component {
  render() {
    return (
      <div>
        <div>
          <img class="ImgShorts" src={this.props.img} alt="Imagen-Short" />
        </div>
        <ShortsItemContent title={this.props.title}/>
      </div>
    );
  }
}
export default ShortsItem;