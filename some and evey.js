// // some method 

const evenNumbers = [0, 3, 4, 6, 8, 10, 12]
const evenResult = evenNumbers.some((Number, index) => {

    if (Number % 2 == 1) {
        console.log(index)
    }


})
console.log(evenResult)


// // Every method

const oddNumbers = [1, 3, 5, 7, 9, 11, 13]
const oddResult = evenNumbers.every((Number1) => {

    return (Number1 % 2 === 0)

})