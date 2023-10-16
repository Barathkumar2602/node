// let amount =20

// if (amount<10){
//     console.log('small');
// }
// else{
//     console.log('large');
// }

// console.log(`hey this is my first node app!!`);

// ===========================

// console.log(__dirname)
// setInterval(()=>{
//     console.log(`hello`)
// },1000  )


// =========================

// // modules...............
//   const names= require('./4-name')
//   const sayHi= require('./5-module')
//   const data=require('./6-alternative')
  
//   require('./7-mind-geranade')
//   console.log(names)
//   console.log(data)
 
//  sayHi("barathkumar")
//  sayHi(names.Barath)
//  sayHi(names.Kumar)

// ==========================


 const _ = require('lodash')

 const items= [1,[2,[3,[4]]]]

 const newItems=_.flattenDeep(items)
console.log(newItems);