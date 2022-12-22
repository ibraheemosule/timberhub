import { memo, useState, Dispatch, SetStateAction } from "react";
import { S_Dimensions } from "./S_Dimensions";
import { S_Container } from "../../others/reusable-styles/S_Container";
import { IDimension, ProductType } from "../../../ts-types/dataTypes";
import { apiRequest } from "../../../utils";
import DimensionCard from "./DimensionCard/DimensionCard";

const Dimensions: React.FC<{ data: ProductType }> = ({ data }) => {
  const [dimensions, setDimensions] = useState([...data.dimensions]);

  const deleteDimension =
    (id: string) =>
    async (
      setLoading: Dispatch<SetStateAction<boolean>>,
      setError: Dispatch<SetStateAction<string>>
    ) => {
      const productDimension = [...dimensions].filter(obj => obj.id !== id);
      try {
        setLoading(true);
        const res = await apiRequest("PUT", {
          ...data,
          dimensions: productDimension,
        });

        if (!res) throw Error();
        setDimensions([...productDimension]);
      } catch (e) {
        setError("Error Occurred");
        setLoading(false);
        setTimeout(() => setError(""), 2000);
      }
    };

  return (
    <S_Dimensions>
      <S_Container>
        {dimensions.map((dimensionObj: IDimension) => (
          <DimensionCard
            key={dimensionObj.id}
            obj={dimensionObj}
            deleteFunction={deleteDimension(dimensionObj.id)}
            arrLength={dimensions.length}
          />
        ))}
      </S_Container>
    </S_Dimensions>
  );
};

export default memo(Dimensions);
