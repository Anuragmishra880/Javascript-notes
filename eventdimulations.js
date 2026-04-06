const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector("input")
let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
    newCard.addEventListener("click", () => {
        newCard.remove()
    })
})

// new approach
// container.addEventListener("click", (e) => {
//     if (e.target !== container) {
//         e.target.remove()
//     }
// })
// const intervalId = setInterval(() => {
//     if (count > 100) {
//         clearInterval(intervalId)
//     }
//     else {

//         addCardBtn.click()
//     }
// }, 100);
// setTimeout(() => {

//     input.focus()
// }, 1000);


// setTimeout(() => {

//     input.blur()
// }, 4000);


