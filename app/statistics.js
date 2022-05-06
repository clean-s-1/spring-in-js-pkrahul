module.exports = function getStatistics(numbers){
    var total = 0;
    var ret = {};
    
    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
         ret = {
            min: Math.min(...numbers),
            max: Math.max(...numbers),
            average: total / numbers.length
        }
    }
    else {
        ret = {
            min: 'NaN',
            max: 'NaN',
            average: 'NaN'
        }
    }
    return ret;
    //implement the computation of statistics here
}

