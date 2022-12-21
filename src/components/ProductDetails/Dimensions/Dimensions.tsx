import { memo } from "react";
import { S_Dimensions } from "./S_Dimensions";
import { S_Container } from "../../others/reusable-styles/S_Container";
import { IDimension } from "../../../ts-types/dataTypes";
import DeleteIcon from "../../../assets/icons/DeleteIcon";

const Dimensions: React.FC<{ dimension: IDimension[] }> = ({ dimension }) => {
  return (
    <S_Dimensions>
      <S_Container>
        {dimension.map((key, i) => (
          <div className="details" key={i}>
            <h4>
              <small>Thickness:</small> {key.thickness}
            </h4>
            <h4>
              <small>Width:</small> {key.width}
            </h4>
            <h4>
              <small>Length:</small>
              {key.length}
            </h4>
            <div>
              <button>
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </S_Container>
    </S_Dimensions>
  );
};

export default memo(Dimensions);
