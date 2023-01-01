import { memo } from "react";
import { S_description } from "./S_description";
import { S_container } from "../../../others/reusable-styles/S_container";
import { ProductType } from "../../../../ts-types/dataTypes";
import { formatDate } from "../../../../utils";

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
    <S_container>
      <S_description>
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
      </S_description>
    </S_container>
  );
};

export default memo(Description);
