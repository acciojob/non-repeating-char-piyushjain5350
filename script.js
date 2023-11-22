function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = {};

  // Loop through the string and count the occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again to find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null or any other appropriate value
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 