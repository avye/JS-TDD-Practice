import { expect } from 'chai';
import { sinon } from 'sinon';
import * as code from '../index.js'

describe('Test Suite', function() {
  it('should have a zip function defined', function() {
    expect(code.zip).to.be.a('function');
  });

  it('should return an array', function() {
    expect(code.zip([1],[2])).to.be.an('array');
  });

  it('should zip together two arrays of equal length', function() {
    expect(code.zip([1,2],["a","b"])).to.deep.equal([[1,"a"],[2,"b"]]);
  });

  it('should return null if the two arrays are not of equal length', function() {
    expect(code.zip([1,2,3],['one'])).to.equal(null);
  });

  it('should return null if it is not given two arrays', function() {
    expect(code.zip([1,2],{a:"a"})).to.equal(null);
  });

  it('should handle as many arrays as are given to it', function() {
    expect(code.zip([1,2],["a","b"],[true,false])).to.deep.equal([[1,"a",true],[2,"b",false]]);
  });

  it('should return null if all of the arrays given to it are not the same length', function() {
    expect(code.zip([1,2],["a","b"],[true,false,true])).to.equal(null);
  });
});
