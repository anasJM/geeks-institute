const { format, addDays } = require("date-fns");

const addFiveDaysToDate = (currentDate) => {
  const newDate = addDays(currentDate, 5);
  return format(newDate, "dd-MM-yyyy");
};

module.exports = {
  addFiveDaysToDate,
};
