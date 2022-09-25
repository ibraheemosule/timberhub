import PlusIcon from "../../assets/icons/PlusIcon";

import { FormHeaderStyle } from "../../assets/styles/reusables/FormHeaderStyle";
import { IFormHeader } from "../../assets/ts-types/compTypes";

const FormHeader: React.FC<IFormHeader> = ({ children, title, Icon }) => {
  console.log(Icon);
  return (
    <FormHeaderStyle border={title !== "Dimensions" && true}>
      <Icon />
      <div>
        <h2>{title}</h2>
        {title === "Dimensions" ? (
          <button>
            <PlusIcon /> <span>Add another set</span>
          </button>
        ) : (
          ""
        )}
      </div>
    </FormHeaderStyle>
  );
};

export default FormHeader;
