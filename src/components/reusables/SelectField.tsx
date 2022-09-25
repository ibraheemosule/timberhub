import { SelectFieldStyle } from "../../assets/styles/reusables/SelectFieldStyle";
import { useRef, useState } from "react";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";

const SelectField: React.FC = () => {
  const dropdown = useRef<HTMLButtonElement | null>(null);
  const [option, setOption] = useState<string>("");

  const sortValue = (e: any) => {
    setOption(e.target.outerText as string);
    dropdown.current?.blur();
  };
  return (
    <SelectFieldStyle>
      <h6>Usage *</h6>
      <fieldset className="filter_box">
        <button ref={dropdown}>
          <div className="wrapper">
            <span>{option || "Select"}</span>
            <ArrowDownIcon />
          </div>

          <ul className="dropdown">
            <li>
              <a onClick={(e: any) => sortValue(e)}>here</a>
            </li>
            <li>
              <a onClick={(e: any) => sortValue(e)}>her2</a>
            </li>
          </ul>
        </button>
      </fieldset>
    </SelectFieldStyle>
  );
};

export default SelectField;
