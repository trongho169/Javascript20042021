// bai 15 - ham filter
const arrNames = ["tèo","tí","hoa","tuấn","dương"]
const newArrNames = arrNames.filter(function(name){
    if (name.length <= 3){
        return true;
    }
    return false
})
console.log(newArrNames)
console.log(arrNames)