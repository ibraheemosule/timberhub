import { S_filterField } from "./S_filterField";
import { memo, useState } from "react";
import { ISelectField } from "../../../../../ts-types/resuableCompTypes";
import CustomInput from "../../../../others/CustomInput/CustomInput";

interface IFilterField extends ISelectField {
  type?: "select";
}

const SelectField: React.FC<IFilterField> = ({
  title,
  dropdownList,
  value,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <S_filterField
      dropdown={dropdown}
      tabIndex={-1}
      onBlur={() => setDropdown(false)}
      data-test={title.split(" ").join("")}
    >
      <h6>{title} *</h6>
      <CustomInput
        value={value}
        dropdownList={dropdownList}
        allowSearch={false}
      />
    </S_filterField>
  );
};

export default memo(SelectField);
