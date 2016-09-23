var expect = require('chai').expect;
var sinon = require('sinon');
var code = require('../index.js');

describe('Test Suite', function() {
  it('should have a failing test', function() {
    expect(code.testExample).to.equal(true)
  })
});
