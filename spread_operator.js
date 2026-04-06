const num1 = [12, 23, 22, 33]
const num2 = [13, 33, 32, 23]
// const myName = "anurag"
// // const num = num1.concat(num2)
// // document.write(num) 

// const joinedArray = [...num1, ...myName, ...num2]
// document.write(joinedArray)

// const user = {
//     name: "anurag",
//     age: 21,
//     education: "BCA"
// }

// const updatedUser = {
//     city: "Delhi"
// }
// const updateObject = {
//     ...user, ...updatedUser, contact: 9821497411
// }
// console.log(updateObject)

function add() {
    let sum = 0;
    let i
    for (i = 0; i < arguments.length; i++)

        sum += arguments[i];

    return sum;
}

// const joinArr = [...num1, ...num2]

