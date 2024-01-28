// In the given problem statement, we have an array of strings and we need to find the longest common prefix among them. If no common prefix exists, just return an empty string.

// The starting characters of any string are called as a prefix, and the last letters are called suffix. This prefix can have any length. Among a certain set of strings, a longest common prefix will be the one that exists in every string.

// Let us look at a sample test case:

// Input: strs = [“club”, “clap”, “clove”]
// Output: “cl”
let strs = ["club", "clap", "clove"];
strs.sort();
let str=""

for(let i=0;i<strs.length;i++){
    let first=strs[i]
    let last=strs[strs.length-1]
    if(first[i]===last[i]){
        str=str+first[i]
    }
}
console.log(str)

//O(n logn) time as well as O(n) space complexity