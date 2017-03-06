export default function collatzConjecture(n) {
  if (n % 2 == 0) {
  console.log(n / 2)
} else if (n === 1) {
  console.log(1)
} else {
  console.log(n*3+1)
}
return n
}

console.log(collatzConjecture(7));
