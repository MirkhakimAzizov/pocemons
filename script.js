"use strick";


let elList = document.querySelector(".pacemons__list");
let elForm = document.querySelector(".hero__form");
let elSelect = document.querySelector(".hero__select");
let elSearch = document.querySelector(".hero__search");

renderUi(pokemons);

function renderUi(arr) {

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
            <span class="pacemons__age">Age: ${r.avg_spawns}</span>
        </div>
    `

        elList.appendChild(elItem);

    }
};


let candy = [];

function candies() {
    pokemons.forEach(items => {
        if (!candy.includes(items.candy)) {
            candy.push(items.candy);
        }
    });
    candy.forEach((item) => {
        let elOption = document.createElement('option');
        elOption.textContent = item;
        elSelect.append(elOption);
    });
}
candies();

elForm.addEventListener('change', (evt) => {
    evt.preventDefault();
    let value = elSelect.value;

    elList.innerHTML = '';

    if (value == 'all') {
        renderUi(pokemons)
    } else {
        const candyArr = pokemons.filter((item) => {
            return value === item.candy;
        });
        renderUi(candyArr);

    }
});

elSearch.addEventListener("keyup", (evt) => {
    evt.preventDefault();
    let value;

    if (elSearch.value != " ") {
        value = evt.target.value;

        let nameArr = pokemons.filter(item => {
            return item.name.includes(value);
        })

        elList.innerHTML = '';

        renderUi(nameArr);
    } else {
        renderUi(pokemons);
    }

});