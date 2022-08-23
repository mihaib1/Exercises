const ftoc = function(tempF) {
  result = (tempF - 32) * (5/9);
  if(Number.isInteger(result)) {
    return Number(result);
  } else return +result.toFixed(1);
  
};

const ctof = function(tempC) {
  result = tempC * (9/5) + 32;
  if(Number.isInteger(result)) {
    return result;
  } else  return +result.toFixed(1);
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
