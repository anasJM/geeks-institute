const Holidays = require("date-holidays");
const { intervalToDuration, compareAsc, formatDuration } = require("date-fns");

const now = new Date();
const holidays = new Holidays("MA");

const getNextHolidayDates = (allYearHolidays) => {
  return allYearHolidays
    .getHolidays()
    .find((holiday) => compareAsc(holiday.start, now) === 1);
};

const interval = intervalToDuration({
  start: now,
  end: getNextHolidayDates(holidays).start,
});

const formatedDuration = formatDuration(interval);

module.exports = {
  formatedDuration,
};
