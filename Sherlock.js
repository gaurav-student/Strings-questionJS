// let s="abcdefghhgfedecba";
// let s="abccc";
let s="aabbcd";
// let s="aabbccddeefghi"
// let s="abcdefghhgfedecba"
const SherlockString=(s)=>{
let mymap=new Map()
for(let i=0;i<s.length;i++){
    if(mymap.has(s[i])){
        let count=mymap.get(s[i])
        mymap.set(s[i],count+1)
    }else{
        mymap.set(s[i],1)
    }
}
console.log(mymap)
if(mymap.size==1) return "YES";                                         //O(n) time and O(1) space complexity
let arr_temp = [...mymap.values()];
let temp=arr_temp.sort((a,b)=>a-b)
console.log(temp)
let first=temp[0];
let second=temp[1];
let secondLast=temp[temp.length-2]
let last=temp[temp.length-1];
if (first == last) return "YES";
if (first == 1 && second == last) return "YES";
if (first == second && second == secondLast && secondLast == (last - 1)) return "YES";
else return "NO"
}
console.log(SherlockString(s))