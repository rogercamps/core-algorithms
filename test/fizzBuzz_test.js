import {expect} from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('should return and array', function(){
    expect(Array.isArray(fizzBuzz())).to.equal(true)
  })

  it('should return the string Fizz for multiples of three', function(){
    expect(fizzBuzz()[2]).to.equal('Fizz')
    expect(fizzBuzz()[5]).to.equal('Fizz')
  })

  it('should return the string Buzz for multiples of five', function(){
    expect(fizzBuzz()[4]).to.equal('Buzz')
    expect(fizzBuzz()[9]).to.equal('Buzz')
  })

  it('should return FizzBuzz for numbers which are multiples of both three and five', function(){
    expect(fizzBuzz()[14]).to.equal('FizzBuzz')
    expect(fizzBuzz()[29]).to.equal('FizzBuzz')
  })

})
