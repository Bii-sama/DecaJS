/*let i = 2
while(1 < 10){
  console.log(i)
  i+2
}*/


/*let userHat = ['great',' house',' is',' by',' the',' river']

for(let x = 0; x <= userHat.length; x++){
  
    document.write(userHat[x].toUpperCase())
   
}*/


let user = {
  name: "Adeola",
  lastName: "Richards",
  age: 27,
  location: "Okota"
}

for(let key in user){
  console.log(user[key])
}
