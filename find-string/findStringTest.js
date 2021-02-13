'use strict';

const chai = require('chai');
const findFirstStringInBracket = require('.');

let expect = chai.expect;

describe('Find String Tests', () => {
  it('should successfully find string', async () => {
    let tests = [
      {
        str: '(32)',
        expected: '32',
      },
      {
        str: '(43)()0)ok)',
        expected: '43',
      },
      {
        str: '(',
        expected: '',
      },
      {
        str: '((()))',
        expected: '((',
      },
    ];

    tests.forEach((test) => {
      let result = findFirstStringInBracket(test.str);
      expect(result).to.equal(test.expected);
    });
  });
});
