import {
  Dispatch,
  memo,
  SetStateAction,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import { S_pagination } from "./S_pagination";

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<IPaginationProps> = props => {
  const { numOfPages, number, setNumber } = props;
  const [pagNumberInput, setPagNumberInput] = useState<number | string>(number);

  useEffect(() => setPagNumberInput(number), [number]);

  const increment = () => {
    if (number < numOfPages) setNumber(number => number + 1);
  };

  const decrement = () => {
    if (number > 1) setNumber(number => number - 1);
  };

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFieldValue = e.target.value.trim();
    const newPaginationNumber = Number(inputFieldValue);

    if (Number.isNaN(newPaginationNumber) || newPaginationNumber > numOfPages)
      return;

    if (newPaginationNumber === 0) {
      setPagNumberInput(inputFieldValue === "" ? inputFieldValue : 0);
      return;
    }
    setNumber(newPaginationNumber);
  };

  return (
    <S_pagination data-test="pagination">
      {numOfPages > 0 && (
        <>
          <button disabled={number > 1 ? false : true} onClick={decrement}>
            Previous
          </button>
          <div>
            <input
              type="text"
              value={pagNumberInput}
              pattern="[0-9]+"
              inputMode="numeric"
              onChange={e => changeNumber(e)}
            />
            of {numOfPages}
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

export default memo(Pagination);
