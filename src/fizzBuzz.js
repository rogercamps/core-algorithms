//for pull request review
export default function fizzBuzz() {
  var numbers = []
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      numbers.push('FizzBuzz')
    } else if (i % 3 == 0){
      numbers.push('Fizz')
    } else if (i % 5 == 0) {
      numbers.push('Buzz')
    } else {
      numbers.push(i)
    }
  }
  return numbers
}
