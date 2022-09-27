import dynamic from "next/dynamic";
import PlusIcon from "../../assets/icons/PlusIcon";
import { FormHeaderStyle } from "../../assets/styles/reusables/FormHeaderStyle";
import { IFormHeader } from "../../assets/ts-types/compTypes";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";
import { IDimension, RowItemType } from "../../assets/ts-types/dataTypes";

const SelectField = dynamic(() => import("./SelectField"), { ssr: false });

const FormHeader: React.FC<IFormHeader> = ({ info }) => {
  const { obj, setObj } = useContext(Context);

  const Icon = info[1].Icon;

  const addDimension = () => {
    const newObj = { ...obj };
    newObj.dimensions.push({} as IDimension);
    setObj(newObj);
  };

  const getValue = (val: string, i?: number) => (e: string | number) => {
    const time: number = new Date().getTime();
    const dimensions = ["thickness", "width", "length"].includes(val);

    if (!dimensions) {
      setObj((prev: typeof obj) => ({
        ...prev,
        created: time,
        [val]: e,
      }));
      return;
    }
    if (i === undefined) return;

    if (!obj.dimensions[i]) {
      setObj((prev: RowItemType) => ({
        ...prev,
        dimensions: [
          ...prev.dimensions,
          {
            [val]: e,
          } as unknown as IDimension,
        ],
      }));
      return;
    }
    setObj((prev: typeof obj) => {
      prev.dimensions[i] = {
        ...prev.dimensions[i],
        [val]: e,
      };
      return {
        ...prev,
      };
    });
  };

  return (
    <FormHeaderStyle border={info[0] !== "Dimensions" && true}>
      <Icon />
      <div>
        <h2>{info[0]}</h2>

        {info[0] === "Dimensions" ? (
          <button onClick={addDimension}>
            <PlusIcon /> <span>Add another set</span>
          </button>
        ) : (
          ""
        )}
        <article>
          {info[1].select
            ? info[1].select.map((val, i) => (
                <div key={i}>
                  <SelectField
                    options={info[1].options[i]}
                    select={val}
                    value={getValue(info[1].options[i])}
                  />
                </div>
              ))
            : obj.dimensions?.map((val: IDimension, i: number) => (
                <section key={i}>
                  {info[1].options.map((opt, index) => (
                    <div key={opt}>
                      <SelectField
                        options={info[1].options[index]}
                        value={getValue(info[1].options[index], i)}
                      />
                    </div>
                  ))}
                </section>
              ))}
        </article>
      </div>
    </FormHeaderStyle>
  );
};

export default FormHeader;
