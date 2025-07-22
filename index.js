function countvowel(str){
    let count = 0
    const vowel = ["a","e","i","o","u"]

for(let i = 0; i < str.length; i++){
    if(vowel.includes(str[i])){
         count++
    }
       
}
return count;
}
console.log(countvowel("bangladesh"));