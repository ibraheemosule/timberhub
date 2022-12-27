import { S_selectField } from "./S_selectField";
import { memo, useEffect, useRef, useState, useContext, useMemo } from "react";
import ArrowDownIcon from "../../../../../../assets/icons/ArrowDownIcon";
import { ISelectField } from "../../../../../../ts-types/resuableCompTypes";
import { isNumber } from "../../../../../../utils";
import { Context } from "../../../../../../utils/Context";

const dimensionFields = ["thickness", "width", "length"];

const SelectField: React.FC<ISelectField> = ({
  title,
  dropdownList,
  value,
}) => {
  const inputField = useRef<HTMLInputElement | null>(null),
    selectInputField = useRef<HTMLInputElement | null>(null),
    [dropdown, setDropdown] = useState(false),
    [errorInput, setErrorInput] = useState(false),
    [option, setOption] = useState(""),
    [type, setType] = useState(""),
    { modal, formError, setFormError } = useContext(Context);

  useEffect(() => {
    resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  const filteredSelectOptions = useMemo(() => {
    if (!dropdownList) return;
    return Array.from(dropdownList).filter(val =>
      val?.toLocaleLowerCase().startsWith(option.toLocaleLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, dropdownList]);

  useEffect(() => {
    switch (title) {
      case "species":
        setType("wood species");
        break;
      case "drying_method":
        setType("drying");
        break;
      default:
        setType(title);
    }
  }, [title]);

  const resetFields = () => {
    const searchBar = document.querySelector("input");
    if (searchBar) searchBar.value = "";

    setOption("");
    setFormError("");

    if (!inputField.current) return;
    inputField.current.value = "";
  };

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.value);
    value(e.target.value);
  };

  const updateValue = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setOption(e.currentTarget.innerText);
    value(e.currentTarget.innerText);
    setDropdown(false);
  };

  const validateKeyInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setErrorInput(false);
    if (isNumber(e)) return;
    e.preventDefault();
    setErrorInput(true);
  };

  const selectFieldBlurred = () => {
    setDropdown(false);
    if (!dropdownList?.includes(option as never)) {
      setOption("");
      value("");
    }
    selectInputField.current?.blur();
  };

  const errorBorderColor = useMemo(() => {
    if (dimensionFields.includes(type)) {
      return !Number(option) && !!formError;
    }

    return !!(formError && !option);
  }, [formError, option, type]);

  return (
    <S_selectField
      dropdown={dropdown}
      inputError={errorBorderColor}
      tabIndex={-1}
    >
      <h6>{type} *</h6>
      {dimensionFields.includes(type) ? (
        <>
          <input
            ref={inputField}
            type="text"
            inputMode="numeric"
            onKeyDown={e => validateKeyInput(e)}
            onChange={e => getValue(e)}
            onBlur={() => setErrorInput(false)}
          />
          {errorInput && (
            <div className="input-error">Numerical values only</div>
          )}
        </>
      ) : (
        <fieldset className="filter-box">
          <button onFocus={() => setDropdown(true)} onBlur={selectFieldBlurred}>
            <input
              value={option}
              onChange={e => {
                !dropdown && setDropdown(true);
                setFormError("");
                setOption(e.target.value);
              }}
              ref={selectInputField}
            />
            <ArrowDownIcon />

            <ul className="dropdown">
              {Number(filteredSelectOptions?.length) > 3 && (
                <li>
                  <b>Scroll for more options</b>
                </li>
              )}
              {filteredSelectOptions?.length ? (
                filteredSelectOptions.map((val, i) => (
                  <li key={i}>
                    <a onMouseDown={e => updateValue(e)}>{val}</a>
                  </li>
                ))
              ) : (
                <li>
                  <a> No Result</a>
                </li>
              )}
            </ul>
          </button>
        </fieldset>
      )}
    </S_selectField>
  );
};

export default memo(SelectField);
