// //bai 10 - for of chi su dung cho array
// const arrNames = ["ti","suu","dan"]
// const ti = {
//     ten: "nguyenvanti",
//     tuoi: 25
// }
// for (const value of arrNames){
//     console.log(value)
// }

// su dung vong lap for...of de tinh tich cua cac phan tu trong mot array
// function multilply(arr){
//     if ( Array.isArray(arr)){
//         let result = 1
//         for (const value of arr){
//             result *= value
//         }
//         return result
//     }
//     else{
//         return "gia tri khong phai la mang"
//     }
// }
// console.log(multilply([2,3,4]));

// bai 11 - for in
// const arrNames = ["ti","suu","dan"]
// const ti = {
//     name: "nguyenvanti",
//     age: 25
// }
// for(const key in ti){
//     console.log(key)
// }
// su dung vong lap for...in de in ra tat ca cac key trong object
// var apartment = {
//     Bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };
  
//   function getkey(object){
//       for(const key in object){
//           console.log(key)
//           for(const keyBedRoom in object[key]){
//             console.log(keyBedRoom)
//            for(const keyBed in object[key][keyBedRoom]){
//                 console.log(keyBed)
//             }
//           }
//       }
//   }
// getkey(apartment)
//  function getkey(object){
//      for (const key in object){
//          console.log(key)
//          if (typeof object[object]=== 'object'){
//              getkey(object[key])
//          }
//      }
//  }
  