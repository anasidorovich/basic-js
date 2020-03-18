var SEASONS = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  return SEASONS[date.getMonth()];
};
