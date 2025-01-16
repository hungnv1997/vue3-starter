import { get } from "idb-keyval";
export const parseToCsv = (data) => {
  // Split the data into lines
  const lines = data.split("\n"); // Extract the headers
  // trim space
  const headers = lines[0].split(",").map((header) => header.trim());
  // // Process the data into objects
  const result = lines.slice(1).map((line) => {
    const values = line.split(",");
    const obj = headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {});
    return obj;
  });
  return result;
};
export const checkDataExpire = ($dataName) => {
  get($dataName).then((val) => {
    if (val) {
      const { expireAt } = val;
      if (expireAt < Date.now()) {
        // expired
        return true;
      }
      return false;
    }
    return true;
  });
};
