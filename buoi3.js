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
const arrPerson = [
    {id :1 , name : 'Tèo', age : 20},
    {id :2 , name : 'Tủn', age : 25},
    {id :3 , name : 'Hoa', age : 22},
    {id :4 , name : 'Tuấn', age : 21},
    {id :5 , name : 'Lan', age : 26},
]
const filterarrPerson = arrPerson.filter(function(person){
    if (person.age < 25){
        return true;
    }
    return false
}).map(function(object){
    return object.name
})
console.log(filterarrPerson)