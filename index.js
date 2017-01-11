/**
 * @param {Date} fromDate
 * @param {Date} toDate
 * @return {boolean}
 */
function withinOneYear(fromDate, toDate) {
  var oneYearAgo = new Date(
    fromDate.getFullYear() + 1,
    fromDate.getMonth(),
    fromDate.getDate(),
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds()
  );

  return oneYearAgo.getTime() >= toDate.getTime();
}

module.exports = withinOneYear;
