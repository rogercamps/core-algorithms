import {expect} from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('should be a string', function(){
    expect(isPalindrome()).to.be.a('string')
  })

  it('should ignore punctuation, spacing and case sensitivity', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })

  it('determines if a string is a palindrome. Return true or false', function(){
    expect(isPalindrome('radar')).to.equal(true)
  })

  it('determines if a string is a palindrome. Return true or false', function(){
    expect(isPalindrome('bananas')).to.equal(false)
  })

  it('determines if a string is a palindrome. Return true or false', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })
})
