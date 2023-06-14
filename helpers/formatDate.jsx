import {
  formatDistanceToNow,
  subDays,
  isToday,
  isYesterday,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

function formatDate(start) {
  const date = new Date(start);

  let displayDate;

  const monthsDiff = differenceInMonths(new Date(), date);
  const yearsDiff = differenceInYears(new Date(), date);

  if (isToday(date)) {
    displayDate = "today";
  } else if (isYesterday(date)) {
    displayDate = "yesterday";
  } else if (monthsDiff < 1) {
    displayDate = `${formatDistanceToNow(date)} ago`;
  } else if (yearsDiff < 1) {
    displayDate =
      monthsDiff === 1 ? `${monthsDiff} month ago` : `${monthsDiff} months ago`;
  } else {
    displayDate =
      yearsDiff === 1 ? `${yearsDiff} year ago` : `${yearsDiff} years ago`;
  }

  return displayDate;
}

console.log(formatDate("2023-05-22"));

export default formatDate;
