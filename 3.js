function sum(x){
    return function(y){
        return x + y;
}
}
let num1 = 1;
let num2 = 2;
const result = sum(num1);
console.log(result(num2));