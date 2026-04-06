const nameElement = document.querySelector(".name-tag")
const nameInput = document.querySelector(".name")
const ageElement = document.querySelector(".age-tag")
const ageInput = document.querySelector(".age")

// nameElement.innerText = localStorage.myname
// nameInput.addEventListener("input", (e) => {
//     localStorage.myname = e.target.value;
//     nameElement.innerText = localStorage.myname
// })

// nameElement.innerHTML = localStorage.getItem("myName")
// nameInput.addEventListener("input", (e) => {
//     localStorage.setItem("myName", e.target.value);
//     nameElement.innerHTML = localStorage.getItem("myName")
// })
// ageElement.innerHTML = localStorage.getItem("Age")
// ageInput.addEventListener("input", (e) => {
//     localStorage.setItem("Age", e.target.value);
//     ageElement.innerHTML = localStorage.getItem("Age")
// })

const userData = JSON.parse(localStorage.getItem("myData")) || {}
nameInput.addEventListener("input", (e) => {
    userData.name = e.target.value
    localStorage.setItem("myData", JSON.stringify(userData))
    nameElement.innerHTML = e.target.value
})
ageInput.addEventListener("input", (e) => {
    userData.age = e.target.value
    localStorage.setItem("myData", JSON.stringify(userData))
    ageElement.innerHTML = e.target.value
})
nameElement.innerHTML = localStorage.myData.name
ageElement.innerHTML = localStorage.myData.age