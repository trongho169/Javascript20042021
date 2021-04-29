// bai 15 - ham filter
// const arrNames = ["tèo","tí","hoa","tuấn","dương"]
// const newArrNames = arrNames.filter(function(name){
//     if (name.length <= 3){
//         return true;
//     }
//     return false
// })
// console.log(newArrNames)
//baitap - in ra mang person duoi 25 tuoi
// const arrPerson = [
//     {id :1 , name : 'Tèo', age : 20},
//     {id :2 , name : 'Tủn', age : 25},
//     {id :3 , name : 'Hoa', age : 22},
//     {id :4 , name : 'Tuấn', age : 21},
//     {id :5 , name : 'Lan', age : 26},
// ]
// const filterarrPerson = arrPerson.filter(function(person){
//     if (person.age < 25){
//         return true;
//     }
//     return false
// }).map(function(object){
//     return object.name
// })
// console.log(filterarrPerson)

// bai 16 - ham reduce
// const arrNums = [1,2,3,4,5]
// const newarrNums = arrNums.reduce(function(accumulator, currentValue){
//     //lan 1
//     //accumulator : 0 value
//     //currentValue :1 value
//     //return : 5
//     //lan 2
//     //accumulator : 5 value
//     //currentValue :2 value
//     //return : 7
//     //lan 3
//     //accumulator : 7 value
//     //currentValue :3 value
//     return accumulator + currentValue
// },0)
// console.log(newarrNums)

//baitap_vidu: dung ham reduce in ra mang cac ten duoi 25 tuoi
// const arrPerson = [
//     {id :1 , name : 'Tèo', age : 20},
//     {id :2 , name : 'Tủn', age : 25},
//     {id :3 , name : 'Hoa', age : 22},
//     {id :4 , name : 'Tuấn', age : 21},
//     {id :5 , name : 'Lan', age : 26},
// ]
// const newarr = arrPerson.reduce(function(accumulator, currentValue){
//     if (currentValue.age <25){
//         accumulator.push(currentValue.name);
//     }
//     return accumulator
// },[])
// console.log(newarr)
//baitap_vidu: xuat mang ra ket qua {a : 3, b : 2, c : 1}
// function countOccurrences(arr) {
//     const object = arr.reduce(function(accumulator,currentValue){
//         if (currentValue in accumulator){
//             accumulator[currentValue]++
//         }
//         else{
//             accumulator[currentValue]=1
//         }
//         return accumulator
//     },{})
//     console.log(object)
// }
// countOccurrences(["a", "b", "c", "b", "a", "a"]);

// bai 16 : ham sort
// const arrNums = [1,10,2,20,15,5,6]
// console.log(arrNums.sort(function(a,b){
//     return b - a // tuong duong bieu thuc b>a
// }))
// const arrChar = ['a','A','b','c','d','D']
// console.log(arrChar.sort())

// bai 18 - function scope
// let a =5
// function setValue(){
//     a =10
//     console.log(a)
// }
// setValue()
// console.log(a)

// bai 19 - arrow function
// const arrNums = [1,2,3,4,5] // su dung ham funtion
// const newarr = arrNums.map(function(number){
//     return number * 2
// })
// // su dung ham arrow function
// const newarr2 = arrNums.map((number) => {
//     return number * 2
// })