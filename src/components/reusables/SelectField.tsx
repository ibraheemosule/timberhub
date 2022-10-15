import { SelectFieldStyle } from "../../assets/styles/reusables/SelectFieldStyle";
import { memo, useEffect, useRef, useState, useContext } from "react";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../assets/ts-types/compTypes";
import { isNumber } from "../../assets/utils";
import { Context } from "../../assets/utils/Context";

const dimensionTypes = ["thickness", "width", "length"];

const SelectField: React.FC<ISelectField> = ({ options, select, value }) => {
  const inputField = useRef<HTMLInputElement | null>(null),
    optionField = useRef<HTMLSpanElement | null>(null),
    [dropdown, setDropdown] = useState(false),
    [option, setOption] = useState(""),
    [type, setType] = useState(""),
    { modal } = useContext(Context);

  useEffect(() => {
    resetFields();
  }, [modal]);

  useEffect(() => {
    if (dropdown === false) return;
    setDropdown(val => !val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

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

  const resetFields = () => {
    const searchBar = document.querySelector("input");
    if (searchBar) searchBar.value = "";

    setOption("");

    if (!inputField.current) return;
    inputField.current.value = "";
  };

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);

    value(e.target.value);
  };

  const updateValue = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOption(e.currentTarget.innerText);
    value(e.currentTarget.innerText);
  };

  return (
    <SelectFieldStyle
      dropdown={dropdown}
      tabIndex={-1}
      onBlur={() => setDropdown(false)}
    >
      <h6>{type} *</h6>
      {dimensionTypes.includes(type) ? (
        <input
          ref={inputField}
          type="text"
          onKeyDown={e => isNumber(e)}
          onChange={e => getValue(e)}
        />
      ) : (
        <fieldset className="filter_box">
          <button onClick={() => setDropdown(val => !val)}>
            <div className="wrapper">
              {option ? (
                <span ref={optionField} className="option">
                  {option}
                </span>
              ) : (
                <span className="placeholder">Select</span>
              )}
              <ArrowDownIcon />
            </div>

            <ul className="dropdown">
              {select &&
                select.map((val, i) => (
                  <li key={i}>
                    <a onClick={e => updateValue(e)}>{val}</a>
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
