// Question: Given a string, count the number of times the letter ‘a’ is repeated.
// Input: str = “abcac”, n= 10
// Output: 4

let str = "abcd", n= 10;
const strLength = str.length;
const fullRepeats = Math.floor(n / strLength);
const remainder = n % strLength;
console.log(fullRepeats,remainder,strLength)
let count = 0;
for (let i = 0; i < strLength; i++) {
    if (str[i] === 'a') {
      count += fullRepeats;
      if (i < remainder) {       //O(n) time and O(1) space complexity
        count++;
      }
    }
    console.log(count)
}

console.log(count);