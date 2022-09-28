import { IDimension, RowItemType } from "../ts-types/dataTypes";
import ProductIcon from "../../assets/icons/ProductIcon";
import SpecificationIcon from "../../assets/icons/SpecificationIcon";
import DimensionIcon from "../../assets/icons/DimensionIcon";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const titles = {
  "Sawn Timber": {
    Icon: ProductIcon,
    options: ["usage", "species"],
    select: [
      ["Lorem ipsum dolor", "quis nostrud", "omnis iste natus error"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
    ],
  },
  Specifications: {
    Icon: SpecificationIcon,
    options: ["drying_method", "grade", "treatment"],
    select: [
      ["Lorem ipsum dolor", "quis nostrud", "omnis iste natus error"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
    ],
  },
  Dimensions: {
    Icon: DimensionIcon,
    options: ["thickness", "width", "length"],
  },
};

export const formatDate = (val: number): string => {
  const date = new Date(val);

  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const getDuplicates = (dimensionArr: RowItemType) => {
  let duplicates: { [key: string]: number } = {};

  dimensionArr.dimensions?.forEach(val => {
    const itExist = duplicates[`${val.thickness}x${val.width}`];
    if (itExist) {
      ++duplicates[`${val.thickness}x${val.width}`];
      return;
    }
    duplicates = Object.assign(duplicates, {
      [`${val.thickness}x${val.width}`]: 1,
    });
  });

  return Object.entries(duplicates);
};

export const dataFormat = {
  id: 10013433,
  created: 1660665689,
  usage: "",
  species: "",
  drying_method: "",
  grade: "",
  treatment: null,
  dimensions: [{}] as IDimension[],
};

//prevents typing of letters to the create products input fields
export const isNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const rgx = /^[0-9]*\.?[0-9]*$/;
  if (!e.key.match(rgx) && e.key !== "Backspace") e.preventDefault();
};

//validate data before adding it to the root data array
export const validateData = (
  validObj: RowItemType,
  obj: RowItemType
): boolean => {
  return Object.keys(validObj).every(key => {
    if (key === "dimensions") {
      const mapObj = obj[key].map((val: IDimension) => Object.entries(val));

      const flattenObj = obj[key].flatMap((val: IDimension): unknown => {
        return Object.values({ ...val });
      });

      if (flattenObj.includes("")) return false;

      return mapObj.every(val => val.length === 3);
    }

    if (!obj[key as keyof RowItemType]) return false;

    return true;
  });
};
