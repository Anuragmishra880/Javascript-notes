// const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
// const capitalizeMonth = month.forEach((month) => {
//     document.write(capitalizeMonth)
//     return month.toUpperCase()
// }).


// // Map method

// const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
// const capitalizeMonth = month.map((month, index) => {
//     document.write(month, index)
//     return month.toUpperCase()
// })
// document.write(capitalizeMonth)

//  // filter method

// const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
// const filterMonth = month.filter((month)=>{
//     return month.length >= 6
// })
// document.write(filterMonth)


// const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
// const filterMonth = month.filter((month, index) => {
//     return month.toLowerCase().includes("m")

// })
// document.write(filterMonth)

// const students = [
//     {
//         name: "Anurag",
//         age: 21
//     },
//     {
//         name: "karan",
//         age: 21
//     },
//     {
//         name: "sagar",
//         age: 20
//     },
//     {
//         name: "Sunny",
//         age: 22
//     },
//     {
//         name: "nidhi",
//         age: 17
//     }
// ]
// let adultStudents = students.filter((students, age) => {
//     return students.age >= 18

// })
// .map((students) => {
//     return students.name
// })

// document.write(adultStudents)



// const number=[1,22,333,4444,55555,666666]
const number = [1, 2, 3, 4, 5, 6]
// number.reduce((accumulator, currentValue,index,array) => {
//     console.log(array)
//     console.log(index)
// },112)

const sum = number.reduce((accumulator, currentValue, index, array) => {

    // console.log(accumulator, currentValue)
    // console.log( currentValue)

    // return accumulator + currentValue
    // return accumulator - currentValue
    // return accumulator * currentValue
    // return accumulator / currentValue
 
},1)