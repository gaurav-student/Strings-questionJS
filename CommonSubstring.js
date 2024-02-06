// Given two strings, determine if they share a common sub-string. If they have a common sub-string, print YES else print NO.


function twoStrings(s1, s2) {
    let flag="NO"
for(let i=0;i<s1.length;i++){
        if(s1.includes(s2[i])){                                      //O(n) time and Space O(1) complexity
            flag="YES"
        }
}
return flag;

}
twoStrings("study","str")