const arr = [1, 2, 3, 4, 5, 6, 7, "string", null, 0];
let even = 0;
let odd = 0;
let zero = 0;
function getElements() {
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === "number" || !isNaN(arr[i])) {
if (arr[i] % 2 === 0) {
even += 1;
} else {
odd += 1;
}
if (arr[i] === 0) {
zero += 1;}
}}
console.log(`${even} чётных, ${odd} нечётных, ${zero} нулей.`);
};
getElements();