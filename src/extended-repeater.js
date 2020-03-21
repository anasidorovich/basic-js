module.exports = function repeater(str, options) {
    let repeatTimes  = options.repeatTimes,
        separator = options.separator || '+',
        addition = options.addition !== undefined ? '' + options.addition : '',
        additionStr = '',
        additionRepeatTimes = options.additionRepeatTimes || 1,
        additionSeparator = options.additionSeparator || '';

    if (additionRepeatTimes > 0) {
        additionStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
    }
    return repeatTimes > 0 ? (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr : str + additionStr;
};