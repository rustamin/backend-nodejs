function groupAnagrams(anagrams) {
  let result = [];
  anagrams.forEach((anagram) => {
    if (result.length === 0) {
      result.push([anagram]);
      return;
    }
    let nextAnagram = false;

    let temp = anagram;
    for (let i = 0; i < anagram.length; i++) {
      let newAnagram = _newAnagram(temp);

      temp = temp.substr(1) + temp.substring(0, 1);

      // find in result, if match push to the result[]
      for (let j = 0; j < result.length; j++) {
        for (let k = 0; k < result[j].length; k++) {
          if (newAnagram == result[j][k]) {
            result[j].push(anagram);
            nextAnagram = true;
            break;
          }
        }
        if (nextAnagram) {
          break;
        }
      }
    }
    if (nextAnagram) {
      return;
    }
    result.push([anagram]);
  });
  return result;
}

function _newAnagram(temp) {
  let newAnagram = '';
  for (let l = 0; l < temp.length; l++) {
    newAnagram += temp[temp.length - 1 - l];
  }
  return newAnagram;
}

module.exports = groupAnagrams;
