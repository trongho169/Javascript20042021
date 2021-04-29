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
const arrPerson = [
    {id :1 , name : 'Tèo', age : 20},
    {id :2 , name : 'Tủn', age : 25},
    {id :3 , name : 'Hoa', age : 22},
    {id :4 , name : 'Tuấn', age : 21},
    {id :5 , name : 'Lan', age : 26},
]
const newarr = arrPerson.reduce(function(accumulator, currentValue){
    if (currentValue.age <25){
        accumulator.push(currentValue.name);
    }
    return accumulator
},[])
console.log(newarr)