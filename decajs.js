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

console.log(sumArray(arr)) */





function separateEvenAndOdd(arr){

  let evenArr = []
    let oddArr = []
   for (i = 0; i < arr.length; i++){
    
    if (arr[i] % 2 == 0 ){
      evenArr.push(arr[i])
    }else{
      oddArr.push(arr[i])
    }
     console.log(evenArr)
     console.log(oddArr)

   }
}

let arr1 = [2,4,6,8,10,12,13,17,18,19,22,31,39]
console.log(separateEvenAndOdd(arr1))