function consecutiveSubstrings(string) {
  // TODO: implement consecutiveSubstrings
  /**
  @param {string} str - input string
  @return {string[]} - array of consecutive substrings
  */
 // Create an empty array to hold the substrings
  const result = [];

  // Loop through the string to get the starting index of the substring
  for (let i = 0; i < string.length; i++) {

    // Loop through the string to get the ending index of the substring
    for (let j = i + 1; j <= string.length; j++) {

      // Push the substring to the result array
      result.push(string.slice(i, j));
    }
  }
  // Return the array of substrings
  return result;
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: ['h', 'he', 'hel', 'hell', 'hello', 'e', 'el', 'ell', 'ello', 'l', 'll', 'llo', 'l', 'lo', 'o']");
  console.log("=>", consecutiveSubstrings('hello'));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;


