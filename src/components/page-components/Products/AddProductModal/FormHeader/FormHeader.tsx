import dynamic from "next/dynamic";
import PlusIcon from "../../../../../assets/icons/PlusIcon";
import { S_formHeader } from "./S_formHeader";
import { useContext, FC, useEffect } from "react";
import { Context } from "../../../../../utils/Context";
import { IDimension, ProductType } from "../../../../../ts-types/dataTypes";
import { validateData } from "../../../../../utils";

const SelectField = dynamic(() => import("./SelectField/SelectField"), {
  ssr: false,
});

interface IFormHeader {
  formField: [
    string,
    {
      Icon: FC<Record<string, unknown>>;
      inputFieldTitles: string[];
      selectFieldDropdownList?: string[][];
    }
  ];
}

const FormHeader: React.FC<IFormHeader> = ({ formField }) => {
  const { newProduct, setNewProduct, setFormError } = useContext(Context);

  const Icon = formField[1].Icon;

  useEffect(() => {
    validateData(newProduct) && setFormError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFormError, JSON.stringify(newProduct)]);

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
      setNewProduct((prev: ProductType) => ({
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
    <S_formHeader border={formField[0] !== "Dimensions" && true}>
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
          {formField[1].selectFieldDropdownList
            ? formField[1].selectFieldDropdownList.map((val, i) => (
                <div key={i}>
                  <SelectField
                    title={formField[1].inputFieldTitles[i]}
                    dropdownList={val}
                    value={getValue(formField[1].inputFieldTitles[i])}
                  />
                </div>
              ))
            : newProduct.dimensions?.map((val: IDimension, i: number) => (
                <section key={i}>
                  {formField[1].inputFieldTitles.map((opt, index) => (
                    <div key={opt}>
                      <SelectField
                        title={formField[1].inputFieldTitles[index]}
                        value={getValue(
                          formField[1].inputFieldTitles[index],
                          i
                        )}
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
    </S_formHeader>
  );
};

export default FormHeader;
