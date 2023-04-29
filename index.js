const addDays = require("date-fns/addDays");
const getDaysAfterxDays = (days) => {
  let newDays = addDays(new Date(2020, 7, 22), days);
  return `${newDays.getDate()}-${
    newDays.getMonth() + 1
  }-${newDays.getFullYear()}`;
};
module.exports = getDaysAfterxDays;
getDaysAfterxDays(2);
