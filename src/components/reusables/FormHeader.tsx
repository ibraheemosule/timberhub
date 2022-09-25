import dynamic from "next/dynamic";
import PlusIcon from "../../assets/icons/PlusIcon";
import { FormHeaderStyle } from "../../assets/styles/reusables/FormHeaderStyle";
import { IFormHeader } from "../../assets/ts-types/compTypes";

const SelectField = dynamic(() => import("./SelectField"), { ssr: false });

const FormHeader: React.FC<IFormHeader> = ({ title, Icon }) => {
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
        <article>
          <div>
            <SelectField type={"thickness"} />
          </div>
          <div>
            <SelectField type={"thickness"} />
          </div>
        </article>
      </div>
    </FormHeaderStyle>
  );
};

export default FormHeader;
