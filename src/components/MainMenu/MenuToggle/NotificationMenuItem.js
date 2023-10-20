import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";

//NOTAS:
//PASAR PARÁMETROS POR LOS FORMULARIOS
class NotificationMenuItem extends Component {
  render() {
    return (
      <div className="NotificationMenuItem">
        <div class="NotificationLogo">
          <img id="NotificationLogoImg" src={this.props.img} ></img>
        </div>
        <div className="NotificationContent">
            <h5>Recomendación Just Between Us </h5>
            <p> hace 18 horas </p>
        </div>
        <img src={this.props.img}></img>
      </div>
    );
  }
}
export default NotificationMenuItem;
