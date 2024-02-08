// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// let s="abcdefghhgfedecba";
// let s="abccc";
let s="aabbcd";
let goal="aabbdc"
// let s="aabbccddeefghi"
// let s="abcdefghhgfedecba"
function buddyStrings(s, goal){
    // If the strings doesn't have same length
    // then there is no possibility for getting same string after swapping also 
    if (s.length !== goal.length) return false;

    // push the indexes of the different characters
    let diffCharsInd = [];

    // go through the `s` & `goal` string and get the different character's indexes;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diffCharsInd.push(i);
    }

                                                                                        //O(n) time and O(1) space complexity
    if (diffCharsInd.length === 0) {
        const set = new Set(s)
        // if any duplicate characters present in 's';
        // example test-case: s => 'aa' & goal => 'aa'
        if (set.size < s.length) return true;
    } else if (diffCharsInd.length == 2) {
        // if number fo different charaters are 2 and the characters in 
        // different indexes will match after swapping then only return true
        const [x, y] = diffCharsInd;
        if (s[x] === goal[y] && s[y] === goal[x]) return true;
    }

    return false;
};
console.log(buddyStrings(s, goal))