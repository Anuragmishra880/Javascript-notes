const num1 = [12, 23, 22, 33]
// const num2 = [13, 33, 32, 23] 

// function add(a, b, c, ...nums) {
//     console.log(a, b, c)
//     console.log("nums:", nums)
//     // let sum = 0;
//     // for (let i = 0; i < nums.length; i++)

//     //     sum += nums[i];
//     // return sum;
// }

// const result = add(21, 22,22,23)


// function add() {
//     return [...arguments].reduce((acc, curr) => acc + curr)
// }

// function add() {
//     return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

function add(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
}
const result = add(...num1)

console.dir(document)