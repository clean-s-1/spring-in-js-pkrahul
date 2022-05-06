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