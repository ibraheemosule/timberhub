import { S_customInput } from "./S_customInput";
import { memo, useRef, useState, useMemo, FC, useEffect } from "react";
import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";

import { isNumber } from "../../../utils";

interface ICustomInput {
  dropdownList?: (string | null)[] | undefined;
  allowSearch?: boolean;
  value: (e: string) => void;
  numeric?: boolean;
  error?: boolean;
  reset?: boolean;
}

const CustomInput: FC<ICustomInput> = props => {
  const selectInputField = useRef<HTMLInputElement | null>(null),
    [dropdown, setDropdown] = useState(false),
    [errorInput, setErrorInput] = useState(false),
    [option, setOption] = useState(""),
    inputField = useRef<HTMLInputElement>(null);

  const { dropdownList, value, numeric, error, allowSearch, reset } = props;

  useEffect(() => {
    reset && setOption("");
    if (inputField.current) inputField.current.value = "";
  }, [reset]);

  const filteredSelectOptions = useMemo(() => {
    if (!dropdownList) return;
    if (!allowSearch) return dropdownList;

    return Array.from(dropdownList).filter(val =>
      val?.toLocaleLowerCase().startsWith(option.toLocaleLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, dropdownList]);

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

  const CustomInputBlurred = () => {
    setDropdown(false);
    const inputValueVerify = dropdownList?.every(opt => {
      if (opt?.toLowerCase() === option.toLowerCase()) {
        setOption(opt);
        value(opt);
        return false;
      }
      return true;
    });
    if (inputValueVerify) {
      setOption("");
      value("");
    }

    selectInputField.current?.blur();
  };

  const errorBorderColor = useMemo(() => {
    if (dropdownList === undefined) {
      return !Number(option) && error;
    }

    return !!(error && !option);
  }, [error, option, dropdownList]);

  return (
    <S_customInput
      data-test="custom-input"
      dropdown={dropdown}
      inputError={errorBorderColor}
      tabIndex={-1}
    >
      {dropdownList === undefined ? (
        <>
          <input
            ref={inputField}
            type="text"
            inputMode={numeric ? "numeric" : "text"}
            onKeyDown={e => numeric && validateKeyInput(e)}
            onChange={e => getValue(e)}
            onBlur={() => numeric && setErrorInput(false)}
          />
          {errorInput && numeric && (
            <div className="input-error">Numerical values only</div>
          )}
        </>
      ) : (
        <fieldset className="filter-box">
          <button onFocus={() => setDropdown(true)} onBlur={CustomInputBlurred}>
            <input
              value={option}
              disabled={!allowSearch}
              onChange={e => {
                !dropdown && setDropdown(true);
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
                  <a>No Result</a>
                </li>
              )}
            </ul>
          </button>
        </fieldset>
      )}
    </S_customInput>
  );
};

CustomInput.displayName = "CustomInput";

export default memo(CustomInput);
