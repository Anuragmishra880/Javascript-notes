// Q 1) find area of a triangle with the help of heroines formula
let a = 10;
let b = 20;
let c = 15;
//  find S = sum of all sides length/2 OR (a,b,c) / 2

let s = (a + b + c) / 2
// console.log((s))
// formula sqrt of s(s-a)* (s-b)*( s-c)

// console.log(s * (s - a) * (s - b) * (s - c))
let Area = Number(Math.sqrt(s * ((s - a) * (s - b) * (s - c))))

console.log(Area)


// Q 2)  Generate 4 Digit OTP

console.log(Math.trunc((Math.random() * 9000) + 1000))

// Q 3 )
let x = 11, y = 22;
let z = x + y + x++ + ++y + ++x + ++x;
console.log('x=' + x)
console.log('y=' + y)
console.log('z=' + z)