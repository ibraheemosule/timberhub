import { SelectFieldStyle } from "../../assets/styles/reusables/SelectFieldStyle";
import { memo, useEffect, useRef, useState, useContext } from "react";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../assets/ts-types/compTypes";
import { isNumber } from "../../assets/utils";
import { Context } from "../../assets/utils/Context";

const dimensionTypes = ["thickness", "width", "length"];

const SelectField: React.FC<ISelectField> = ({ options, select, value }) => {
  const dropdown = useRef<HTMLButtonElement | null>(null);
  const inputField = useRef<HTMLInputElement | null>(null);
  const optionField = useRef<HTMLSpanElement | null>(null);
  const [option, setOption] = useState("");
  const [type, setType] = useState("");
  const { modal } = useContext(Context);

  useEffect(() => {
    resetFields();
  }, [modal]);

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
    dropdown.current?.blur();
  };

  return (
    <SelectFieldStyle>
      <h6>{type} *</h6>
      {dimensionTypes.includes(type) ? (
        <input
          ref={inputField}
          onKeyDown={e => isNumber(e)}
          onChange={e => getValue(e)}
        />
      ) : (
        <fieldset className="filter_box">
          <button ref={dropdown}>
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
