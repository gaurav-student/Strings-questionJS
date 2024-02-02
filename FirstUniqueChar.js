
//first Unique Character in a string ;

// let str="studyAlgorithms";
let mymap=new Map();
let newstr=str.toLowerCase().split("");
let index=-1;
for(let i=0;i<newstr.length;i++){
    if(!mymap.has(str[i])){
        mymap.set(str[i],1)
    }else{
        let val=mymap.get(str[i])
        mymap.set(str[i],val+1)
     }                                                  //O(n) time and O(1) space Complexity;
}
for(let i=0;i<newstr.length;i++){
    if(mymap.get(newstr[i])===1){
        index=i
        break;
    }
}
console.log(index)