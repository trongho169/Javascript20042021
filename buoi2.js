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
// bai 12 - array method
// const arrNumber = [1,2,5,4,7,5]
// // // // them phan tu cuoi mang
// arrNumber.push(7)
// // // // xoa phan tu cuoi
// arrNumber.pop()
// // // // them phan tu o dau
// arrNumber.unshift(15)
// // // //xoa phan tu o dau
// arrNumber.shift()
// // //xoa phan tu o giua
// arrNumber.splice(1,4)
// // // them o giua
// arrNumber.splice(1,0,20,21,22,23)
// console.log(arrNumber)

// bai tap 1......
// function removeEnd(arr,n){
//     arr.splice(arr.length - n,n)
//     return arr
// }
// console.log(removeEnd([2,3,1,8,9,7],3))

// bai tap 2......
// function first(arr, n) {
//     return arr.slice(0,n)
// }
// console.log(first([1, 2, 3], 2)); // expect [1, 2]

// bai 13 - higher order function
function nhan2(number){
    return number * 2
}
function tinhTong(arr,func){
    let result = 0
    for (const value of arr){
        result += value
    }
    return func(result)
}
console.log(tinhTong([1,2],nhan2))