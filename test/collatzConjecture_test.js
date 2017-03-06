import {expect} from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

})
// #### collatzConjecture
//
// Return the Collatz sequence for a given number.
//
// The Collatz sequence for any positive integer `n` is defined as follows:
//
// > If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.
//
// ```javascript
// collatzConjecture(1)
// // => [1]
//
// collatzConjecture(7)
// // => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// ```
