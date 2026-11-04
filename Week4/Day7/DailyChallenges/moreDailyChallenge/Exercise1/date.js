const { intervalToDuration } = require("date-fns");

const now = new Date();
const currentYear = now.getFullYear();

const targetDate = new Date(`january 1, ${currentYear + 1} 00:00:00`);

const duration = intervalToDuration({
  start: now,
  end: targetDate,
});

console.log(
  `The 1st January is in ${duration.months} months, ${duration.days} days and ${duration.hours}:${duration.minutes}:${duration.seconds}`,
);
