export default function factorial(num) {
  var fact = 1;
  for (var i = num; i > 1; i--) {
  fact = fact * i;
  }
  return fact
}
