import './style.css';
import { Menu } from './menu';
import { DOMSelectors } from './dom'

const types = {
  breakfast: Menu.filter((breakfast)=> breakfast.type === 'breakfast'),
  lunch: Menu.filter((lunch)=> lunch.type === 'lunch'),
  dinner: Menu.filter((dinner)=> dinner.type === 'dinner'),
  dessert: Menu.filter((dessert)=> dessert.type === 'dessert'),
  vegetarian: Menu.filter((vegetarian)=> vegetarian.vegetarian === true),
  under10: Menu.filter((cost)=> cost.price <= 10),
  over10: Menu.fitler((cost)=> cost.price > 10),
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
});

function addcard(card) {

  DOMSelectors.container.insertAdjacentHTML(
    'afterbegin',
    `S
    <div class="gallery" id="container">
    <h1 class="food-name"> ${card.name}</h1>
    <h2 class="image"> ${card.img}</h2>
    <h3 class="price"> ${card.price}</h3>
  </div>
    
    `
  )
}
Menu.forEach(el => addcard(el))


/*document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
setupCounter(document.querySelector('#counter'))
document.querySelector(".btn").addEventListener("click", function(){
  
})

DOMSelectors.form.addEventListener("#btn", function (event) {
  event.preventDefault();
  addcard();
});

function addcard() {
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<div class="card" id="box">
        <h1 class="menu-food"> ${DOMSelectors.food} </h1>
        <h3 class="food-desc"> ${DOMSelectors.description} </h3>
        <img src= "${DOMSelectors.img}" alt="image" class="card-image">
        </div>`,
        console.log(menu)
  );
}
*/
