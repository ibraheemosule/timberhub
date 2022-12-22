import { memo, useState, Dispatch, SetStateAction } from "react";
import { S_Dimensions } from "./S_Dimensions";
import { S_Container } from "../../others/reusable-styles/S_Container";
import { RowItemType } from "../../../ts-types/dataTypes";
import { apiRequest } from "../../../utils";
import DimensionCard from "./DimensionCard/DimensionCard";

const Dimensions: React.FC<{ data: RowItemType }> = ({ data }) => {
  const [dimensions, setDimensions] = useState([...data.dimensions]);

  const deleteDimension =
    (i: number) =>
    async (
      setLoading: Dispatch<SetStateAction<boolean>>,
      setError: Dispatch<SetStateAction<string>>
    ) => {
      let productDimension = [...dimensions];

      delete productDimension[i];
      productDimension = productDimension.filter(value => value !== null);

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
        {dimensions.map((dimensionObj, i) => (
          <DimensionCard
            key={Math.random() * 9999}
            obj={dimensionObj}
            deleteFunction={deleteDimension(i)}
            arrLength={dimensions.length}
          />
        ))}
      </S_Container>
    </S_Dimensions>
  );
};

export default memo(Dimensions);
