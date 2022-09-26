import dynamic from "next/dynamic";
import PlusIcon from "../../assets/icons/PlusIcon";
import { FormHeaderStyle } from "../../assets/styles/reusables/FormHeaderStyle";
import { IFormHeader } from "../../assets/ts-types/compTypes";

const SelectField = dynamic(() => import("./SelectField"), { ssr: false });

const FormHeader: React.FC<IFormHeader> = ({ info }) => {
  const Icon = info[1].Icon;

  return (
    <FormHeaderStyle border={info[0] !== "Dimensions" && true}>
      <Icon />
      <div>
        <h2>{info[0]}</h2>

        {info[0] === "Dimensions" ? (
          <button>
            <PlusIcon /> <span>Add another set</span>
          </button>
        ) : (
          ""
        )}
        <article>
          {info[1].options.map((val, i) => (
            <div key={i}>
              <SelectField
                options={val}
                select={info[1].select && info[1].select[i]}
                value={""}
              />
            </div>
          ))}
        </article>
      </div>
    </FormHeaderStyle>
  );
};

export default FormHeader;
