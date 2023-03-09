"use strice";

let elList = document.querySelector(".pacemons__list");

render(pokemons);

function render(arr) {

    for (let r of arr) {

        let elItem = document.createElement('li');
        elItem.setAttribute("class", "pacemons__item");

        elItem.innerHTML = `
    
        <div class="pacemons__img">
            <img src="${r.img}" alt="${r.name}">
        </div>
        <div class="pacemons__info">
                <h3 class="pacemons__title">${r.name}</h3>
                <p class="pacemons__text">${r.type}</p>
                <span class="pacemons__weight">${r.weight}</span>
                <span class="pacemons__age">99 age</span>
        </div>
    `

        elList.appendChild(elItem);

    }
};