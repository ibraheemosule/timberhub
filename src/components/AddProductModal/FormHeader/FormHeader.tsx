import dynamic from "next/dynamic";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { S_FormHeader } from "./S_FormHeader";
import { IFormHeader } from "../../../ts-types/componentsTypes";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
import { IDimension, RowItemType } from "../../../ts-types/dataTypes";

const SelectField = dynamic(() => import("./SelectField/SelectField"), {
  ssr: false,
});

const FormHeader: React.FC<IFormHeader> = ({ formField }) => {
  const { newProduct, setNewProduct } = useContext(Context);

  const Icon = formField[1].Icon;

  const addDimensionField = () => {
    const newProductClone = { ...newProduct };
    newProductClone.dimensions.push({} as IDimension);
    setNewProduct(newProductClone);
  };

  const getValue = (val: string, i?: number) => (e: string | number) => {
    const time: number = new Date().getTime();
    const dimensions = ["thickness", "width", "length"].includes(val);

    if (!dimensions) {
      setNewProduct((prev: typeof newProduct) => ({
        ...prev,
        created: time,
        [val]: val === "treatment" && e === "None" ? null : e,
      }));
      return;
    }
    if (i === undefined) return;

    if (!newProduct.dimensions[i]) {
      setNewProduct((prev: RowItemType) => ({
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
    setNewProduct((prev: typeof newProduct) => {
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
    <S_FormHeader border={formField[0] !== "Dimensions" && true}>
      <Icon />

      <div>
        <h2>{formField[0]}</h2>

        {formField[0] === "Dimensions" ? (
          <button onClick={addDimensionField}>
            <PlusIcon /> <span>Add another set</span>
          </button>
        ) : (
          ""
        )}
        <article>
          {formField[1].select
            ? formField[1].select.map((val, i) => (
                <div key={i}>
                  <SelectField
                    options={formField[1].options[i]}
                    select={val}
                    value={getValue(formField[1].options[i])}
                  />
                </div>
              ))
            : newProduct.dimensions?.map((val: IDimension, i: number) => (
                <section key={i}>
                  {formField[1].options.map((opt, index) => (
                    <div key={opt}>
                      <SelectField
                        options={formField[1].options[index]}
                        value={getValue(formField[1].options[index], i)}
                      />
                    </div>
                  ))}
                </section>
              ))}
        </article>
        {formField[0] === "Sawn Timber" ? (
          <h6>This will help us find what fits best to your needs.</h6>
        ) : (
          ""
        )}
      </div>
    </S_FormHeader>
  );
};

export default FormHeader;
