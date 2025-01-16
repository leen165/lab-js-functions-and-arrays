// Iteration 1 | Find the Maximum


function maxOfTwoNumbers(x,y) {
    if(x<y){
     return y;
    }else{
     return x;
    }
}





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    if(arr==0) {
        return null;
    }
  let longestWord = arr[0];
  
  for( let i = 1; i<arr.length; i++){
    if(arr[i].length > longestWord.length){
        longestWord = arr[i];
    }
  }
  console.log(longestWord);
  return longestWord;

}
findLongestWord(words);





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
    let result=0;
  if (arr==""){
    return 0;
  }else if(arr.length === 1)
    return arr[0];
  
   for(let i=0; i < arr.length; i++){
       result += arr[i];
   }
  return result;
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
    if(arr==""){
        return 0;
    }
  let sum = 0;
  for(let i=0; i < arr.length; i++){
    sum+= arr[i];
  }

  return(sum/arr.length);
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const search = "leen";
function doesWordExist(arr, searchWord) {
    if(arr =="")
        return null;


  for(let i=0; i < arr.length; i++){
       if(arr.includes(searchWord)){
        return true;
       }else{
        return false;
       }
  }
}
console.log(doesWordExist(words2, search));
