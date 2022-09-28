/*let i = 2
while(1 < 10){
  console.log(i)
  i+2
}*/


/*let userHat = ['great',' house',' is',' by',' the',' river']

for(let x = 0; x <= userHat.length; x++){
  
    document.write(userHat[x].toUpperCase())
   
}


let user = {
  name: "Adeola",
  lastName: "Richards",
  age: 27,
  location: "Okota"
}

for(let key in user){
  console.log(user[key])
}

let arr = [1,2,3,4,5,6,7,8,9,10];

function sumArray(array) {
  let add = 0
  for(x=0 ; x < array.length; x++){
  add += array[x]
  }
  return add
}

console.log(sumArray(arr)) 





function separateEvenAndOdd(arr){

  let evenArr = []
    let oddArr = []
   for (i = 0; i < arr.length; i++){
    
    if (arr[i] % 2 == 0 ){
      evenArr.push(arr[i])
    }else{
      oddArr.push(arr[i])
    }
     

   }
   console.log(evenArr)
     console.log(oddArr)
}

let arr1 = [2,4,6,8,10,12,13,17,18,19,22,31,39]
console.log(separateEvenAndOdd(arr1)) 


function pickSecondHighest(arr) {
     arr = arr.sort(function(a , b) { // create a function that sorts the numbers from highest to lowest
      b - a
       return b - a }) // returns array with numbers sorted from highest to lowest
    
     return arr[1] // returns number in second position since it will be index position [1]
}

newNumArr=[2,9,7,3,0,4,16,5];

console.log(pickSecondHighest(newNumArr)) 


function pickWords(arr) {
  let wordArray = []
  let numArray = []
  for(i = 0; i < arr.length; i++){
    if(typeof arr[i] == 'string'){
      wordArray.push(arr[i])
    }else{
      numArray.push(arr[i])
    }
  }

  return wordArray;
}

let diffArray = ['cup',2,3,9,'dress','apple','car', 10, 'fifty']

console.log(pickWords(diffArray));


function sumSmallest(arr) {
  arr = arr.sort(function(a , b) { // re-assign variable by creating a function that sorts the numbers from lowest to highest
   a - b
    return a - b}) // returns array with numbers sorted from lowest to highest
 
  return arr[0] + arr[1]// returns added numbers in first position & second position since it will be index position [0] & [1]
}


let sumNums = [15,12,19,88,72,4,29,60];
console.log(sumSmallest(sumNums));


function multiples3And7(num) {
  let add = 0
  let arr = []
  for(i=0;i<num;i++){
    if(i%3==0 || i%7==0){
       arr.push(i)
    }
  }
  for(x=0;x<arr.length; x++){
   add += arr[x]
  }

  return add
}

console.log(multiples3And7(200))
console.log(multiples3And7(10))
console.log(multiples3And7(100))
console.log(multiples3And7(350))
console.log(multiples3And7(900)) 


function removeInt(str) {
 str = str.replace(/[0-9]/g, '')
 return str
}

let word = 'acdg9'

console.log(removeInt(word)); 



function removeWordsWithE(arr) {
  let newArr = []
  let newArr2 = []
  for (i=0 ; i<arr.length; i++){
    if(arr[i].includes('e')){
      newArr.push(arr[i])
    }else{
      newArr2.push(arr[i])
    }
  }
  return newArr2
} 

let words = ['good','bad', 'sweet', 'sour', 'nice', 'great', 'banana', 'hard']

console.log(removeWordsWithE(words));


function findIndex(arr,target) {
  return arr.filter((item)=>item.indexOf(target))
}

let words = ['good','bad', 'sweet', 'sour', 'nice', 'great', 'banana', 'hard']

console.log(findIndex(words,'sour')) */


function findIndex(arr,target) {
  //for(i=0 ; i<arr.length;i++){
    return arr.indexOf(target)
  //}
}

let words = ['good','bad', 'sweet', 'sour', 'nice', 'great', 'banana', 'hard']

console.log(findIndex(words,'hard'))
console.log(words.slice(0,1))