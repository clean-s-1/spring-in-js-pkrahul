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

module.exports = class EmailAlert {
    constructor() {
        this.emailSent = false;
    }
}

module.exports = class LEDAlert {
    constructor() {
        this.ledGlows = false;
    }
}

module.exports = class StatsAlerter {

    constructor(maxThreshold, alerters) {
        this.maxThreshold = maxThreshold;
        this.alerters = alerters;
    }

    checkAndAlert(nums) {
        var maximum = Math.max(...nums);
        if (maximum > this.maxThreshold) {
            this.alerters[0].emailSent = true;
            this.alerters[1].ledGlows = true;
        }
    }
}
