import { IDimension, ProductType } from "../ts-types/dataTypes";
import ProductIcon from "../assets/icons/ProductIcon";
import SpecificationIcon from "../assets/icons/SpecificationIcon";
import DimensionIcon from "../assets/icons/DimensionIcon";

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

export const formFieldDetails = {
  "Sawn Timber": {
    Icon: ProductIcon,
    options: ["usage", "species"],
    select: [
      [
        "Fuscebl",
        "nditeuismodqu",
        "mnonorn",
        "rePdjkkdfk",
        "sellusconsequ",
        "tduivit",
      ],
      ["etemporf", "cilisisAene", "nultricesm"],
    ],
  },
  Specifications: {
    Icon: SpecificationIcon,
    options: ["drying_method", "grade", "treatment"],
    select: [
      ["dictumstliqu", "msitfgghgj", "metdolorins", "pighdheni"],
      [
        "culissceler",
        "isquevelidduiM",
        "urisquispos",
        "uereligul",
        "inlcinim",
        "culissceleri",
        "squeveliddui",
        "urisquispo",
        "suereligul",
      ],
      [
        "None",
        "tultricesexegest",
        "sDuisid",
        "rcutempusfeugi",
        "tSednonestsit",
        "metloremsod",
      ],
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

export const getProductDimensionsDuplicates = (dimensionArr: ProductType) => {
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

export const newProductObj = {
  created: Date.now(),
  usage: "",
  species: "",
  drying_method: "",
  grade: "",
  treatment: null,
  dimensions: [{}] as IDimension[],
} as ProductType;

//prevents typing of letters to the create products input fields
export const isNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const rgx = /^[0-9]*\.?[0-9]*$/;
  if (!e.key.match(rgx) && e.key !== "Backspace") return false;
  return true;
};

//validate data before sending it to the backend
export const validateData = (obj: ProductType): boolean => {
  return Object.keys(newProductObj).every(key => {
    if (key === "dimensions") {
      const mapObj = obj[key].map((dimension: IDimension) =>
        Object.entries(dimension)
      );

      const flattenObj = obj[key].flatMap((dimension: IDimension): unknown => {
        return Object.values({ ...dimension });
      });

      const dimensionValueTypes = flattenObj.every(value => !!Number(value));

      if (!dimensionValueTypes) return false;

      return mapObj.every(val => val.length === 3);
    }

    if (key === "treatment" && obj.treatment === null) return true;

    if (!obj[key as keyof ProductType]) return false;

    return true;
  });
};

export const checkIfProductExist = (
  product: ProductType,
  allProducts: ProductType[]
) => {
  if (!allProducts.length) return -1;

  type PartialProductType = Partial<
    Pick<ProductType, "dimensions" | "created">
  >;

  const productToCheck = { ...product } as PartialProductType;
  delete productToCheck.dimensions;
  delete productToCheck.created;

  const productsInDB = [...allProducts];

  for (let i = 0; i < productsInDB.length; i++) {
    const compareValues = Object.keys(productToCheck).every(key => {
      return (
        productsInDB[i][key as keyof ProductType] ===
        productToCheck[key as keyof PartialProductType]
      );
    });

    if (compareValues) {
      return i;
    }
  }

  return -1;
};

export const apiRequest = async (
  method: "PUT" | "POST" | "DELETE",
  body: ProductType,
  signal?: AbortSignal
) => {
  const res = await fetch("/api", {
    method,
    signal,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const { data } = (await res.json()) as { data: ProductType };

  return data;
};
