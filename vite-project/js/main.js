import './style.css';
import { Menu } from './menu';
import { DOMSelectors } from './dom'

//button filtering
const types = {
  breakfast: Menu.filter((breakfast)=> breakfast.type === 'breakfast'), 
  lunch: Menu.filter((lunch)=> lunch.type === 'lunch'),
  dinner: Menu.filter((dinner)=> dinner.type === 'dinner'),
  dessert: Menu.filter((dessert)=> dessert.type === 'dessert'),
  vegetarian: Menu.filter((vegetarian)=> vegetarian.vegetarian === true),
}
//button
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  addcard(Menu);
});

//cards
function addcard(arr) {
arr.forEach((Food)=> {
  document.querySelector('.flex-container').insertAdjacentElement("afterbegin",
  `
    <div class="gallery" id="container">
    <h1 class="food-name"> ${Food.name}</h1>
   <img src="${Food.img}" alt="" class="card-img">
    <h3 class="price"> ${Food.price}</h3>
  </div>
    `
  )
})
}


document.querySelector('#app').innerHTML = `
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

