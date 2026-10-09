// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function(number){
//     return number + 30;
// })
// console.log(doubled)

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(number){
    if(number == 2 || number == 4){
        return number;
    }
})
console.log(doubled)