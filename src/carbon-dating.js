const MODERN_ACTIVITY = 15;
const RADIOACTIVE_DECAY = 0.693;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(num) {
  if (typeof num !== 'string') {
    return false;
  }
  let nums = num.split(".");
  if (nums.length > 2) {
    num = nums[0] + "." + nums[1];
  }
  if (isNaN(num)) {
    return false;
  }
  num = parseFloat(num);
  if (num <= 0 || num > MODERN_ACTIVITY) {
    return false;
  }

  return Math.floor((Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD / RADIOACTIVE_DECAY)) + 1;
};
