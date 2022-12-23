import { S_filterField } from "./S_filterField";
import { memo, useEffect, useRef, useState, useContext } from "react";
import ArrowDownIcon from "../../../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../../../ts-types/resuableCompTypes";
import { isNumber } from "../../../../utils";

const dimensionObjKeys = ["thickness", "width", "length"];

interface IFilterField extends ISelectField {
  type?: "select";
}

const SelectField: React.FC<IFilterField> = ({
  title,
  dropdownList,
  value,
  type,
}) => {
  const inputField = useRef<HTMLInputElement | null>(null),
    optionField = useRef<HTMLSpanElement | null>(null),
    [dropdown, setDropdown] = useState(false),
    [option, setOption] = useState("");

  useEffect(() => {
    if (dropdown === false) return;
    setDropdown(val => !val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);

    value(e.target.value);
  };

  const updateValue = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOption(e.currentTarget.innerText);
    value(e.currentTarget.innerText);
  };

  return (
    <S_filterField
      dropdown={dropdown}
      tabIndex={-1}
      onBlur={() => setDropdown(false)}
    >
      <h6>{title} *</h6>
      {type === "select" ? (
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
              {dropdownList &&
                dropdownList.map((val, i) => (
                  <li key={i}>
                    <a onClick={e => updateValue(e)}>{val}</a>
                  </li>
                ))}
            </ul>
          </button>
        </fieldset>
      ) : (
        <input
          ref={inputField}
          type="text"
          onKeyDown={e => isNumber(e)}
          onChange={e => getValue(e)}
        />
      )}
    </S_filterField>
  );
};

export default memo(SelectField);
