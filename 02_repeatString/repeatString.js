let userString;
let num;
let i = 0;
let newString='';
const repeatString = function(userString, num) {
    if(num<0) {
        return "ERROR"
    } 
    else if(num === 0 || userString === "") {
        return "";
    }
    else if (num === 1) {
        return userString;
    }
    else { 
        while(i<num) {
            newString += userString;
            i++;
        }
        return newString;
    }

};

// Do not edit below this line
module.exports = repeatString;
