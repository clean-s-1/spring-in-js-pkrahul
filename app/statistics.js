export function getStatistics(numbers){
    var total = 0;
    for( i in numbers){
        total+=i;
    }
    var ret = {
        min:Math.min(...numbers),
        max:Math.max(...numbers),
        average:total/numbers.length
    }
    return ret;
    //implement the computation of statistics here
}
export class EmailAlert{
constructor(){
    this.emailSent=false;
}
}

export class LEDAlert{
constructor(){
    this.ledGlows=false;
    }
}

export class StatsAlerter{

constructor(maxThreshold,alerters){
    this.maxThreshold=maxThreshold;
    this.alerters=alerters;
    }

checkAndAlert(nums){
    var maximum = Math.max(...nums);
    if(maximum > this.maxThreshold){
        this.alerters[0].emailSent=true;
        this.alerters[1].ledGlows=true;
        }
    }
}
