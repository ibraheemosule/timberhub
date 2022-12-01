import { S_SearchBar } from "./S_SearchBar";
import { S_Container } from "../../others/reusable-styles/S_Container";
import SearchIcon from "../../../assets/icons/SearchIcon";
import { useContext, ChangeEvent } from "react";
import { Context } from "../../../utils/Context";

const SearchBar: React.FC = () => {
  const { rows, setList } = useContext(Context);

  const filterList = (e: ChangeEvent<HTMLInputElement>) => {
    const list = [...rows].filter(val =>
      (val.species + val.grade + val.drying_method)
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setList([...list]);
  };
  return (
    <S_Container>
      <S_SearchBar>
        <input
          type="text"
          onChange={e => filterList(e)}
          className="searchfield"
          placeholder="Search"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </S_SearchBar>
    </S_Container>
  );
};

export default SearchBar;