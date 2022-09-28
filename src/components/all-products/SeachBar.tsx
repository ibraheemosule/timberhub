import { SearchBarStyle } from "../../assets/styles/all-products/SearchBarStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";
import SearchIcon from "../../assets/icons/SearchIcon";
import { useContext, ChangeEvent } from "react";
import { Context } from "../../assets/utils/Context";

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
    <ContainerStyle>
      <SearchBarStyle>
        <input
          type="text"
          onChange={e => filterList(e)}
          className="searchfield"
          placeholder="Search"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </SearchBarStyle>
    </ContainerStyle>
  );
};

export default SearchBar;
