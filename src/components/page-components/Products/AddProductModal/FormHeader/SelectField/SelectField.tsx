import { S_selectField } from "./S_selectField";
import { memo, useEffect, useRef, useState, useContext } from "react";

import { ISelectField } from "../../../../../../ts-types/resuableCompTypes";

import { Context } from "../../../../../../utils/Context";
import CustomInput from "../../../../../others/CustomInput/CustomInput";

const SelectField: React.FC<ISelectField> = ({
  title,
  dropdownList,
  value,
}) => {
  const inputField = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState(""),
    { modal, formError, setFormError } = useContext(Context);

  useEffect(() => {
    resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

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

    setFormError("");

    if (!inputField.current) return;
    inputField.current.value = "";
  };

  return (
    <S_selectField data-test={type.split(" ").join("")}>
      <h6>{type} *</h6>
      <CustomInput
        dropdownList={dropdownList}
        value={value}
        numeric={true}
        error={!!formError}
        allowSearch={true}
        reset={!modal}
      />
    </S_selectField>
  );
};

export default memo(SelectField);
