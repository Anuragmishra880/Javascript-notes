// const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const firstImage = document.querySelector(".image")
// container.appendChild(card.cloneNode(true))


// for (let i = 2; i <= 100; i++) {
//     const newImage = firstImage.cloneNode(); 
//     // container.appendChild(newImage);
//     container.append(newImage);

// }

// const paragraph = document.createElement("p")
// paragraph.innerText = "anurag"
// container.append(paragraph)
// for (let index = 1; index <= 100; index++) {
//     const newImage = document.createElement("img")
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
//     container.appendChild(newImage)

// }


for (i = 1; i <= 100; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-Container");
    const newImg = document.createElement("img");
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    const paragraph = document.createElement("p");
    paragraph.innerText = i;
    imgContainer.append(newImg, paragraph);

    container.append(imgContainer)
}




// remove element
document.querySelector("body > h1").remove()


