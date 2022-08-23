const leapYears = function(year) {
    isDivisible = (year % 100 === 0 && year % 400 === 0)
    isDivisible2 = (year %4 ===0 && year % 100 !== 0);
    if( isDivisible2 || isDivisible) {
        return true;
    } else return false;
};

//year % 4 === 0

// Do not edit below this line
module.exports = leapYears;
