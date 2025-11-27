//normal function
function add(a,b){
    return a+b;
}
console.log(add(5,3));
// //Sum of Numbers From 1 to 100 Using Loop
let sum =0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log("sum =", sum);

//Reverse string
let str = "fullstack";
let reversed="";
for(let y=str.length-1;y>0;y--){
    reversed+=str[y];
}
console.log(reversed);

//find element in array
let arr = [4, 8, 15, 16, 23, 42];
let target = 16;
let found = false;

for (let r = 0; r < arr.length; r++) {
    if (arr[r] === target) {
        found = true;
        break;
    }
}
console.log(found ? "Found" : "Not found");
//The Nullish Coalescing Operator (??)
let age;
let finalAge = age ?? 18;

console.log(finalAge); // 18
