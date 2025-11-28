function mult(c,d){
    return c*d;
}
console.log(mult(2,3));
//OR
let product=function(a,b){return a*b;
}
console.log(product(4,5));

let div=function(x,y){return x/y;

 }
 console.log(div(10,4));
    let sub=function(m,n){return m-n;}
    console.log(sub(8,3));
    let add=function(p,q){return p+q;}
    console.log(add(7,2));

    function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let k = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(k);

f = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(f);