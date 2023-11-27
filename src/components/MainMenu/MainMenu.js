import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import Identity from "./Identity";
import SearchBar from "./SearchBar";
import UserArea from "./UserArea";
import LoginMenu from "./Login/LoginMenu";

const usersLoggedIn = true;

class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <Identity />
        <SearchBar />
        {usersLoggedIn ? <UserArea user="María" /> : <LoginMenu />}

      </div>
    );
  }
}
export default MainMenu;
