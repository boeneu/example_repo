/* Takes a range of values and converts it into 50-500 range, 
 maintaining the ratios. */

getPropertyValue(key)var OldValue = getPropertyValue("total_throughput");

var OldMin = 0.1;
var NewMax = 500;
var NewMin = 50;

// Enter here the highest throughput of the Bitcoin addresses you are examining.
var OldMax = 19000;

(((OldValue-OldMin)*(NewMax-NewMin))/(OldMax-OldMin))+NewMin
