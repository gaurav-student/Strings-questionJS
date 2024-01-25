// // HackerRank-Super Reduced Strings
// Let us try to understand this problem statement first. We have some strings that needs to be super reduced in size. The string consists of english alphabets from a to z, and they can be duplicated at some places. If we see two adjacent characters that are same, they can be eliminated. Following this pattern we have to return a super compressed/reduced string.

// Let us look at some sample test cases:

// Input: aabcccdd
// Output: “bc”
// Explanation:
// aabcccdd -> bcccdd -> bcdd -> bc
// (we eliminate two same adjacent characters at each step)

// Input: abba
// Output: “”
// Explanation:
// abba -> aa -> ” “
// The string eventually becomes empty after getting super reduced

let str="abba"
function ReducedString(str){
str=str.split("")
for(let i=0;i<str.length;i++){
    
      if(str[i] === str[i+1]){
        str.splice(i,2);
        i=-1
      }
}

return str.length==0?"Empty":str.join("")
}
console.log(ReducedString(str))