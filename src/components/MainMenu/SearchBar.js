import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import { Tooltip } from "react-tooltip";

const SearchBar = ({ user }) => (
  <div className="AreaMenu SearchBarArea">
    <div className="ActionSearch">
      <form className="FormSearch">
        <input
          className="SearchInput"
          type="text"
          name="Buscar"
          placeholder="Buscar"
        ></input>
      </form>
      <a className="My-Tooltip" data-tooltip-id="my-tooltip" data-tooltip-content="Buscar">
        <a href="#" className="SearchButton">
          <MaterialSymbol icon="Search" size={26} weight={200} fill grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
    </div>
    <div className="MicSearchContainer">
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Haz búsquedas por voz"
      >
        <a href="#" className="MicSearch">
          <MaterialSymbol icon="mic" size={24} weight={300} fill grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  </div>
);

export default SearchBar;
