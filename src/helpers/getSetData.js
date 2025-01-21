import { get, set } from "idb-keyval";
import { formatDate, checkOutDate } from "./date";
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

/**
 * Retrieve data from IndexedDB storage.
 * @param {$dataName} - The storage key.
 * @returns {Promise<*>} - The stored data.
 */
export const getDataFromStorage = async ($dataName) => {
  try {
    const data = await get($dataName);
    return data;
  } catch (error) {
    return null;
  }
};

export const checkAndGetData = async ($dataName, $dataFetchURL) => {
  const data = await getDataFromStorage($dataName);
  // check exist and out date
  if (data && !checkOutDate(data.createdAt)) {
    return data;
  } else {
    //fetch data
    let dataFetch = await fetch($dataFetchURL)
      .then((response) => response.text())
      .then((data) => parseToCsv(data))
      .catch((err) => {
        console.error(err);
        return null;
      });
    //await set data to storage
    await setDataToStorage($dataName, dataFetch);
    //return data
    return dataFetch;
  }
};

export const setDataToStorage = async ($dataName, $data) => {
  try {
    const dateSeted = formatDate(new Date());
    await set($dataName, { createdAt: dateSeted, data: $data });
  } catch (error) {
    console.log(error);
  }
};
