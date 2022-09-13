
let x1, x2;


let a = 2;
let b = 5;
let c = 3;

let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
}
console.log(`The roots of quadratice equation are ${x1} and ${x2}`)