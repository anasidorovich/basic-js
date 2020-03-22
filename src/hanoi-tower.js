module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber);
    let res = {};
    res.turns = turns;
    res.seconds = turns / (turnsSpeed / 3600);
    return res;
}