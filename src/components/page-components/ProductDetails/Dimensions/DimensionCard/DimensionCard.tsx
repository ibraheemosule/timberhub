import { memo, useState, Dispatch, SetStateAction } from "react";
import { IDimension } from "../../../../../ts-types/dataTypes";
import DeleteIcon from "../../../../../assets/icons/DeleteIcon";
import LoaderIcon from "../../../../../assets/icons/LoaderIcon";
import { S_dimensionCard } from "./S_dimensionCard";

const dimensionObjKeys = ["thickness", "width", "length"];
interface IDimensionCard {
  obj: IDimension;
  arrLength: number;
  deleteFunction: (
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string>>
  ) => Promise<void>;
}

const DimensionCard: React.FC<IDimensionCard> = ({
  obj,
  arrLength,
  deleteFunction,
}) => {
  const [error, setError] = useState(""),
    [loading, setLoading] = useState(false);

  return (
    <S_dimensionCard data-test="dimension-card">
      {dimensionObjKeys.map((key, i: number) => (
        <h4 key={i}>
          <small>Thickness:</small> {obj[key as keyof IDimension]}
        </h4>
      ))}

      {arrLength > 1 && (
        <div>
          <span>{error}</span>
          <button
            disabled={loading}
            onClick={() => void deleteFunction(setLoading, setError)}
          >
            {loading ? (
              <LoaderIcon size={18} color="#939393" />
            ) : (
              <DeleteIcon />
            )}
          </button>
        </div>
      )}
    </S_dimensionCard>
  );
};

export default memo(DimensionCard);
