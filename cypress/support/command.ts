import data from "../fixtures/mock-data.json";
import { IDimension } from "../../src/ts-types/dataTypes";

interface params {
  condition?: "gt" | "lt";
  num?: number;
  filterBy?: "width" | "thickness" | "length";
  dimensions?: IDimension[];
}
export const filterData = ({ condition, num }: params) => {
  if (!num) return data;

  switch (condition) {
    case "lt":
      return data.filter(product => product.dimensions.length < num);
    case "gt":
      return data.filter(product => product.dimensions.length > num);
  }

  return data;
};

export const filterDimension = ({
  condition,
  num,
  filterBy,
  dimensions,
}: params) => {
  if (!num || !dimensions) return data;

  if (filterBy) {
    switch (condition) {
      case "lt":
        return dimensions.filter(dimension => dimension[filterBy] < num);

      case "gt":
        return dimensions.filter(dimension => dimension[filterBy] > num);
    }
  }
  return data;
};
