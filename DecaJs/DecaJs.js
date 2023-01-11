/*let i = 2
while(i < 10){
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
console.log(findIndex(words,'sour')) 
function findIndex(arr,target) {
  //for(i=0 ; i<arr.length;i++){
    return arr.indexOf(target)
  //}
}
let words = ['good','bad', 'sweet', 'sour', 'nice', 'great', 'banana', 'hard']
console.log(findIndex(words,'hard'))
console.log(words.slice(0,1))
function categorize(arr) {
  
 for(i=0; i>arr.length; i++){
  if(arr.i[0] > 54 && arr.i[1] > 7){
      return "Old"
  }else{
     return 'Young'
  }
 }
} 
function categorize(arr) {
  return arr.map((mem)=>{
    if(mem[0]>54 && mem[1]>7){
      return "Old"
    }else{
      return "Youth"
    }
  })
 }
let places = [[18, 7],[60, 9],[65, 11],[20, 6]]
console.log(categorize(places))
function sumMix(arr) {
  let add = 0
  for(i=0; i<arr.length; i++){
    if(typeof arr[i] =='string'){
      typeof arr[i] =='number'
    }
    for(i=0; i<arr.length; i++){
      add += arr[i]
    }
  }
   //return arr.reduce((a,b)=> a+b)
} 
function sumMix(arr) {
 for(i=0; i<arr.length; i++){
return arr.reduce((a,b)=> parseInt(a)+parseInt(b)) //parseInt converts the string-like numbers to numbers
}
}
let stuff = ['7','9','8','6','3','11','19']
console.log(sumMix(stuff))
function reverseMultiply(arrOfNumbers) {
  let newArr1 = [] ;
  for(i=0; i<arrOfNumbers.length; i++){
    return arrOfNumbers[i]
  }
  let arr2 = arrOfNumbers.reverse()
  for(i=0; i<arr2.length; i++){
    return arr2[i]
  }
  
   return newArr1
 } 
function reverseMultiply(arrOfNumbers) {
  let newArr1 = [] ;
  let arr1= arrOfNumbers;
 // let arr2= arrOfNumbers.reverse()
  for (i=0; i<arr1.length; i++){
  //for(i=0; i<arr2.length; i++)
    newArr1.push(arr1[i]*arr1.reverse()[i])
  }
   return newArr1
 }
 
 let stuff = [7,9,8,6,3,11,19]
 
console.log(reverseMultiply(stuff))
let figure = document.querySelector('#figure')
let count= 0;
let add = document.querySelector('.add').addEventListener('click', addUp)
function addUp(){
  count +=1
  figure.innerHTML = count;
}
let subtract = document.querySelector('.subtract').addEventListener('click',subtractStuff)
function subtractStuff(){
  //count-=1
  figure.innerHTML = count;
  count < 1 ? 0 : count--
}
 
function oddPyramid(row) {
  for(let i = 1; i < 50; i+=2){
    console.log(i)
  }
}x


function oddCount(array) {
    let newObj = {}
    let emptyArr= []
    for (let i = 0; i < array.length; i++) {
      if(newObj[array[i]]){
        newObj[array[i]] += 1
      }else{
        newObj[array[i]] = 1
      }
      
    }
  
    console.log(newObj)
  
    let newArray = Object.entries(newObj);
    for (let j = 0; j < newArray.length; j++) {
      if(newArray[j][1] %2 == 1){
        emptyArr.push(newArray[j][0])
      }
      
    }
    return emptyArr;
  }
  
  
  let arr = [0,0,0,0,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,7,7,7,7,7,7,7,7,7,7,7,7];
  console.log(oddCount(arr));
  


  function sumOddRowNumbers(row) {
    let start = row*(row-1)+1 //starting number of each row
    let rowArray = [start] // This is the row number
    for(i=0; i<row; i++){
     rowArray.push(rowArray[i]+2)
    }
    console.log(rowArray) 
    let sum = 0
    for(j=0; j<rowArray.length; j++){
        sum+=rowArray[j]
    }
    return sum;
  }

  console.log(sumOddRowNumbers(8))


  function firstLetterToUpperCase(word) {
    let str = word;
    let newArr = str.split(" ")
    for(i=0; i<newArr.length; i++){
     newArr[i]=newArr[i].charAt(0).toUpperCase() +  newArr[i].slice(1);
    }
    let str2 = newArr.join(" ")
    
    
    return str2;
  }

  console.log(firstLetterToUpperCase('book is good at anytime of the day and week'))


  function sumOfEvenNumbers(row){
    let start = 8*(row - 1)
    let rowArray = [start] // This is the row number
    
    for(i=0; i<row; i++){
      rowArray.push(rowArray[i]+2)
  }
    rowArray.length = 4;
    console.log(rowArray) 
    
    let sum = 0
    for(j=0; j<rowArray.length; j++){
        sum+=rowArray[j]
    }
    return sum;
  }

  console.log(sumOfEvenNumbers(3))
  console.log(sumOfEvenNumbers(3))

  function digitalRoot(num) {
    let sum= 0;
    let numArr =  []
    let str = String(num);
    newArr = str.split('')

    for (i=0; i<newArr.length; i++){
     
     numArr.push(Number(newArr[i]))
    }

    for (let j = 0; j < numArr.length; j++) {
      sum+=numArr[j]
      
    }
    while(sum > 9){

    }
  }
  let newNum = 123456;
  console.log(digitalRoot(newNum))*/


  function digitalRoot(number) {
    let sum = number
    let arr = []
    let reducer = (a,b) => parseInt(a) + parseInt(b)
 
    while (sum > 9) {
       arr = sum.toString().split("")
       sum = arr.reduce(reducer)
    }
 
    console.log(sum) 
 }
    
    let newNum = 123456;
    console.log(digitalRoot(newNum))