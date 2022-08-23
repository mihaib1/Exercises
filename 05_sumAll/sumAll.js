const sumAll = function(start, end) {
    let sum = 0;

    if (Number.isInteger(start) && Number.isInteger(end) && start > 0 && end > 0) {
        if(start < end) {
            for(let i = start; i <= end; i++) {
                sum += i;
            } 
        } else if(start > end) {
            for (let i = end; i<=start; i++) {
                sum +=i;
            }
        }
    } else sum = "ERROR"


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
