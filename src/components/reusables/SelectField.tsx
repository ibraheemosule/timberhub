import { SelectFieldStyle } from "../../assets/styles/reusables/SelectFieldStyle";
import React, { memo, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../assets/ts-types/compTypes";

const dimensionTypes = ["thickness", "width", "length"];

const SelectField: React.FC<ISelectField> = ({ options, select, value }) => {
  const dropdown = useRef<HTMLButtonElement | null>(null);
  const [option, setOption] = useState<string>("");
  const [type, setType] = useState("");

  useEffect(() => {
    switch (options) {
      case "species":
        setType("wood species");
        break;
      case "drying_method":
        setType("drying");
        break;
      default:
        setType(options);
    }
  }, [options]);

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
              {select &&
                select.map((val, i) => (
                  <li key={i}>
                    <a onClick={e => sortValue(e)}>{val}</a>
                  </li>
                ))}
            </ul>
          </button>
        </fieldset>
      )}
    </SelectFieldStyle>
  );
};

export default memo(SelectField);
