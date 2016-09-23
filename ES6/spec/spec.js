import { expect } from 'chai';
import { sinon } from 'sinon';
import * as code from '../index.js'

describe('Test Suite', function() {
  it('should have a failing test', function() {
    expect(code.testExample).to.equal(true)
  })
});
