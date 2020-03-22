const seq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let res = [];
    arr.forEach(function(item, i) {
        if (seq.includes(item)) {
            return;
        }
        res.push(arr[i]);
        if ('--double-prev' == arr[i + 1]) {
            res.push(arr[i]);
        }
        if ('--discard-prev' == arr[i + 1]) {
            res.splice(res.length - 1, 1);
        }
        if ('--double-next' == arr[i - 1]) {
            res.push(arr[i]);
        }
        if ('--discard-next' == arr[i - 1]) {
            res.splice(res.length - 1, 1);
        }
    });

    return res;

};