let input = "i hope Popeyes is not packed today.";
const vowels = ["a","e","i","o","u"];
let resultArray = [];

for(let i=0; i<input.length; i++){
  for (let j = 0; j < vowels.length; j++) {
  	if(input.charAt(i) === vowels[j]){
       	resultArray.push(vowels[j]);
    }
  }
}

console.log(resultArray);
