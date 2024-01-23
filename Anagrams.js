let str1 = "abc", str2 = "abcsss"

//by split then sort 
function AnangramChecker(str1,str2){
let new_str1=str1.split('').sort((a,b)=>a-b);
let new_str2=str2.split('').sort((a,b)=>a-b);
let flag=false
if (new_str1.length !== new_str2.length) {
    return false   
}
for(let i=0;i<new_str1.length;i++){
    if(new_str1[i]===new_str2[i]){
           flag=true                                  //complexity of O(n logn) and space O(n) =>we need to decrease time 
    }
    else{
        flag=false
    }
}
return flag
}
console.log(AnangramChecker(str1,str2))

console.log("second method==========================")


///through map    => O(n) time and space is O(n) 
function AnangramChecker1(str1,str2){
    let mymap = new Map();

    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Initialize the map with characters from str2 and set their frequency to 1
    for (let i = 0; i < str2.length; i++) {
        mymap.set(str2[i], (mymap.get(str2[i]) || 0) + 1);
    }
    
    // Iterate through str1 and decrement the frequency for each character
    for (let i = 0; i < str1.length; i++) {
        if (!mymap.has(str1[i])) {
            // If a character is not in str2, they can't be anagrams
            return false;
        }
        mymap.set(str1[i], mymap.get(str1[i]) - 1);
        if (mymap.get(str1[i]) === 0) {
            // Remove the entry if the frequency becomes 0
            mymap.delete(str1[i]);
        }
    }
    
    // If the map is empty, it means both strings have the same characters with the same frequencies
    return mymap.size === 0;    
}
console.log(AnangramChecker1(str1,str2))
