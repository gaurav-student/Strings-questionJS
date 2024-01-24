//Let us try to understand this problem statement first. We have a string in camel case and we have to find the total number of words in this string. A camel case representation is a special representation of string where the first word starts with a small letter, and all the subsequent words start with a capital letter.

// let str='oneTwoThree';
let str='jackAndJillWentUpTheHill';
let count=1;
for(let i=0;i<str.length;i++){
    if(str[i]>='A' && str[i]<='Z'){
        count++                                          //O(n) time O(1)space
    }
}
console.log(count)