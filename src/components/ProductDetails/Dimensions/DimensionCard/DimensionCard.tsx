import { memo, useState, Dispatch, SetStateAction } from "react";
import { IDimension } from "../../../../ts-types/dataTypes";
import DeleteIcon from "../../../../assets/icons/DeleteIcon";
import LoaderIcon from "../../../../assets/icons/LoaderIcon";
import { S_dimensionCard } from "./S_dimensions";

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
    <S_dimensionCard>
      <h4>
        <small>Thickness:</small> {obj?.thickness}
      </h4>
      <h4>
        <small>Width:</small> {obj?.width}
      </h4>
      <h4>
        <small>Length:</small>
        {obj?.length}
      </h4>

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
