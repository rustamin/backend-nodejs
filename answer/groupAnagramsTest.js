'use strict';

const chai = require('chai');
const groupAnagrams = require('./groupAnagrams');

let expect = chai.expect;

describe('Anagram Tests', () => {
  it('should successfully grouping anagrams', async () => {
    let tests = [
      {
        anagrams: ['kita', 'atik'],
        expected: [['kita', 'atik']],
      },
      {
        anagrams: ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'uka'],
        expected: [
          ['kita', 'atik', 'tika'],
          ['aku', 'uka'],
          ['kia'],
          ['makan'],
        ],
      },
    ];

    tests.forEach((test) => {
      let result = groupAnagrams(test.anagrams);
      expect(result).to.deep.equal(test.expected);
    });
  });
});
