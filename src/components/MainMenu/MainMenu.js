import { Component } from "react";
import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import Identity from "./Identity";
import SearchBar from "./SearchBar";
import UserArea from "./UserArea";
import LoginMenu from "./Login/LoginMenu";

const usersLoggedIn = true;

class MainMenu extends Component {
  render() {
    return (
      <div class="MainMenu">
        <Identity />
        <SearchBar />
        {usersLoggedIn ? <UserArea user="María" /> : <LoginMenu />}

      </div>
    );
  }
}
export default MainMenu;
