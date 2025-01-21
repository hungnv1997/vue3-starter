export const formatDate = (date, formatDate = "YYYY-MM-DD") => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  if (formatDate === "YYYY-MM-DD") {
    return [year, month, day].join("-");
  }
};
export const checkOutDate = ($date) => {
  let currentMilliseconds = new Date();
  const month = currentMilliseconds.getUTCMonth(); // months from 1-12
  const day = currentMilliseconds.getUTCDate();
  const year = currentMilliseconds.getUTCFullYear();
  let currentDate = new Date(year, month, day).getTime();
  let tagetDate = new Date($date).getTime();
  return currentDate > tagetDate;
};
