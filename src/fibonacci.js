export default function fibonacci(num) {
  var sequence = [0,1];
  for (var i = 1; i <= num - 2; i++) {
    sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2])
  }
  return sequence
}
