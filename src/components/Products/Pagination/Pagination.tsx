import { Dispatch, SetStateAction } from "react";
import { S_pagination } from "./S_pagination";

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<IPaginationProps> = props => {
  const { numOfPages, number, setNumber } = props;

  const increment = () => {
    if (number < numOfPages) setNumber(number => number + 1);
  };

  const decrement = () => {
    if (number > 1) setNumber(number => number - 1);
  };

  return (
    <S_pagination>
      {numOfPages > 0 && (
        <>
          <button disabled={number > 1 ? false : true} onClick={decrement}>
            Previous
          </button>
          <div>
            <span>{number}</span> of {numOfPages}
          </div>
          <button
            disabled={number < numOfPages ? false : true}
            onClick={increment}
          >
            Next
          </button>
        </>
      )}
    </S_pagination>
  );
};

export default Pagination;
