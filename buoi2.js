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
// function nhan2(number){
//     return number * 2
// }
// function tinhTong(arr,func){
//     let result = 0
//     for (const value of arr){
//         result += value
//     }
//     return func(result)
// }
// console.log(tinhTong([1,2],nhan2))
// bai tap 3
/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */
//  function transform(numbers, callback) {
//      const newArr = []
//      for (const value of numbers){
//          newArr.push(callback(value))
//      }
//      return newArr
//     // Viết nội dung hàm ở đây 
//     }
    
//     function double(num) {
//       return num * 2;
//     }
    
//     var output = transform([2, 4, 6], double);
//     console.log(output);
//     // Expect: [4, 8, 12]

// bai 14 -  ham app 
// thay doi gia tri phan tu trong mang
// khong thay doi kich thuoc cua mang
// tao ra mang moi chua su thay doi nay
// const arrNumbers = [1,2,3,4,5]
// const newArrNumbers = arrNumbers.map(function(number){
//     // console.log(number)
//     return number * 2
// })
// console.log(newArrNumbers)

//bai tap vi du-Make an array of strings of the names
function namesOnly(arr) {
    const newArr = arr.map(function(person){
        return person.name
    })
    console.log(newArr)
}
namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
