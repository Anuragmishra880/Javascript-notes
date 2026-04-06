const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");
// container.appendChild(card.cloneNode(true))


for (let i = 2; i <= 100; i++) {
    const newcard = card.cloneNode();
    newcard.innerText = i
    // container.appendChild(newcard);
    container.append(newcard);

}