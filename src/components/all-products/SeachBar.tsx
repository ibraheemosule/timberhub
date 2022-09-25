import { SearchBarStyle } from "../../assets/styles/all-products/SearchBarStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";
import SearchIcon from "../../assets/icons/SearchIcon";

const SearchBar: React.FC = () => {
  return (
    <ContainerStyle>
      <SearchBarStyle>
        <input type="text" name="searchfield" placeholder="Search" />
        <button type="submit">
          <SearchIcon />
        </button>
      </SearchBarStyle>
    </ContainerStyle>
  );
};

export default SearchBar;
