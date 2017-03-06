import {expect} from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return an array of Fibonacci numbers to a specified position', function(){
    expect(fibonacci(7)).to.eql([0,1,1,2,3,5,8])
  })
})
