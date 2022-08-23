const removeFromArray = function(myArray, ...theArgs) {

    theArgs = theArgs.sort();
    for (let i=0; i<myArray.length; i++) {
        for(let j = 0; j<theArgs.length; j++) {
            if(myArray[i] === theArgs[j]) {
                myArray.splice(i, 1);
            }
        }
    }

    return myArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
