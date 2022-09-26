import { SelectFieldStyle } from "../../assets/styles/reusables/SelectFieldStyle";
import React, { useRef, useState } from "react";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../assets/ts-types/compTypes";

const dimensionTypes = ["thickness", "width", "length"];

const SelectField: React.FC<ISelectField> = ({ type }) => {
  const dropdown = useRef<HTMLButtonElement | null>(null);
  const [option, setOption] = useState<string>("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);
  };

  const sortValue = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOption(e.currentTarget.innerText);
    dropdown.current?.blur();
  };
  return (
    <SelectFieldStyle>
      <h6>{type} *</h6>
      {dimensionTypes.includes(type) ? (
        <input onChange={e => getValue(e)} />
      ) : (
        <fieldset className="filter_box">
          <button ref={dropdown}>
            <div className="wrapper">
              {option ? (
                <span className="option">{option}</span>
              ) : (
                <span className="placeholder">Select</span>
              )}
              <ArrowDownIcon />
            </div>

            <ul className="dropdown">
              <li>
                <a onClick={e => sortValue(e)}>here</a>
              </li>
              <li>
                <a onClick={e => sortValue(e)}>her2</a>
              </li>
            </ul>
          </button>
        </fieldset>
      )}
    </SelectFieldStyle>
  );
};

export default SelectField;
