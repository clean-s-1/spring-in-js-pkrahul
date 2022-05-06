module.exports = function getStatistics(numbers){
    var total = 0;
    var ret = {};
    if (numbers.length > 0) {
        for (i in numbers) {
            total += i;
        }
         ret = {
            min: Math.min(...numbers),
            max: Math.max(...numbers),
            average: total / numbers.length
        }
    }
    else {
        ret = {
            min: '',
            max: '',
            average: ''
        }
    }
    return ret;
    //implement the computation of statistics here
}

