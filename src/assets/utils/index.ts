import { RowItemType } from "../ts-types/dataTypes";

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

export const formatDate = (val: number) => {
  const date = new Date(val);

  return `${date.getDay() + 1}. ${
    months[date.getMonth() + 1]
  } ${date.getFullYear()}`;
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
