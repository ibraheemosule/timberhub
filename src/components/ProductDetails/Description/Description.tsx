import { memo } from "react";
import { S_Description } from "./S_Description";
import { S_Container } from "../../others/reusable-styles/S_Container";
import { ProductType } from "../../../ts-types/dataTypes";
import { formatDate } from "../../../utils";

const keys = [
  "usage",
  "species",
  "drying_method",
  "grade",
  "treatment",
  "created",
];

const Description: React.FC<{ data: ProductType }> = ({ data }) => {
  return (
    <S_Description>
      <S_Container>
        {keys.map(key => {
          if (!data[key as keyof ProductType]) return null;
          return (
            <div key={key} className="details">
              <h4>{key}</h4>
              <p>
                {key === "created"
                  ? formatDate(data.created)
                  : data[key as keyof ProductType]}
              </p>
            </div>
          );
        })}
      </S_Container>
    </S_Description>
  );
};

export default memo(Description);
