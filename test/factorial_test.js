//for pull request review
import {expect} from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
  expect(factorial).to.be.a('function')
  })

  it('should require a number', function(){
  expect(factorial(3)).to.be.a('number')
  })

  it('should return value of integer multiplied by all lower integers', function(){
  expect(factorial(5)).to.equal(120)
  })
})
