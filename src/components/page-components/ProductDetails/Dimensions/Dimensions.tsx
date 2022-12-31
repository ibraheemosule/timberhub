import {
  memo,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
} from "react";
import { S_dimensions } from "./S_dimensions";
import { S_container } from "../../../others/reusable-styles/S_container";
import { IDimension, ProductType } from "../../../../ts-types/dataTypes";
import { apiRequest } from "../../../../utils";
import DimensionCard from "./DimensionCard/DimensionCard";
import FilterField from "./FilterDimension/FilterField";

const dimensionObjKeys = ["thickness", "width", "length"];
const filterOptions = ["none", "greater than", "less than"];

const Dimensions: React.FC<{ data: ProductType }> = ({ data }) => {
  const [dimensions, setDimensions] = useState([...data.dimensions]),
    rootDimension = useRef([...data.dimensions]),
    [filterBy, setFilterBy] = useState(""),
    [range, setRange] = useState(""),
    [filterValue, setFilterValue] = useState("");

  useMemo(() => {
    setDimensions(() => [...rootDimension.current]);

    const stopExecution =
      !filterBy || !+filterValue || !range || range === "none";
    if (stopExecution) return;

    const filteredDimension = [...rootDimension.current].filter(obj => {
      if (range === "less than") {
        return obj[filterBy as keyof IDimension] < +filterValue;
      }

      return obj[filterBy as keyof IDimension] > +filterValue;
    });

    setDimensions(() => [...filteredDimension]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, range, filterValue]);

  const deleteDimension =
    (id: string) =>
    async (
      setLoading: Dispatch<SetStateAction<boolean>>,
      setError: Dispatch<SetStateAction<string>>
    ) => {
      const productDimension = [...rootDimension.current].filter(
        obj => obj.id !== id
      );
      try {
        setLoading(true);
        const res = await apiRequest("PUT", {
          ...data,
          dimensions: productDimension,
        });

        if (!res) throw Error();

        rootDimension.current = [...productDimension];

        if (filterValue) {
          setDimensions(prevArray => prevArray.filter(obj => obj.id !== id));
          return;
        }
        setDimensions([...productDimension]);
      } catch (e) {
        setError("Error Occurred");
        setLoading(false);
        setTimeout(() => setError(""), 2000);
      }
    };

  const getFilterValue = (filterTitle: string) => (value: string) => {
    switch (filterTitle) {
      case "filterBy":
        setFilterBy(value.toLocaleLowerCase());
        break;

      case "range":
        setRange(value.toLocaleLowerCase());
        break;
      case "filterValue":
        setFilterValue(value.toLocaleLowerCase());
        break;
    }
  };

  return (
    <S_dimensions data-test="dimensions-wrapper">
      <S_container>
        {rootDimension.current.length > 5 && (
          <aside className="filter-wrapper">
            <FilterField
              title="Filter By"
              type="select"
              dropdownList={dimensionObjKeys}
              value={getFilterValue("filterBy")}
            />
            <FilterField
              title="Range"
              type="select"
              dropdownList={filterOptions}
              value={getFilterValue("range")}
            />
            <FilterField
              title="Value"
              dropdownList={dimensionObjKeys}
              value={getFilterValue("filterValue")}
            />
          </aside>
        )}
        <div className="cards-wrapper">
          {dimensions.map((dimensionObj: IDimension) => (
            <DimensionCard
              key={dimensionObj.id}
              obj={dimensionObj}
              deleteFunction={deleteDimension(dimensionObj.id)}
              arrLength={dimensions.length}
            />
          ))}
        </div>
        {!dimensions.length && <h3>No Dimensions Matched</h3>}
      </S_container>
    </S_dimensions>
  );
};

export default memo(Dimensions);
