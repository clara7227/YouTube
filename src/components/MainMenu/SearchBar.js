import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import { Tooltip } from "react-tooltip";

const SearchBar = ({ user }) => (
  <div className="AreaMenu">
    <div className="SearchBarArea">
      <form>
        <input
          className="SearchInput"
          type="text"
          name="Buscar"
          placeholder="Buscar"
        ></input>
      </form>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Buscar">
        <a href="#" className="SearchButton">
          <MaterialSymbol icon="Search" size={20} fill grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  </div>
);

export default SearchBar;
