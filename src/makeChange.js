export default function makeChange({price, amountGiven}) {
  // your code here
var object = {'quarters':0 , 'dimes':0 , 'nickels':0 , 'pennies':0 }
// makeChange({ price: 159, amountGiven: 200 });
var difference = amountGiven - price
// quarters
  if  (difference >= 25) {
    Math.floor(difference / 25);
    var quarters = Math.floor(difference / 25);
    difference = (difference % 25);
    object.quarters = quarters
    console.log(object)
  // dimes
  }
  if (difference >= 10) {
    Math.floor(difference / 10)
    var dimes = Math.floor(difference / 10);
    difference = (difference % 10);
    object.dimes = dimes
    console.log(object)
    // nickels
  }
  if (difference >= 5) {
    Math.floor(difference / 5)
    var nickels = Math.floor(difference / 5);
    difference = (difference % 5)
    object.nickels = nickels
    console.log(object)
  // pennies
  }
  if (difference > 0){
    var pennies = difference
    object.pennies = pennies
  }
return object
}
