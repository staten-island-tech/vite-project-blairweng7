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
};

DOMSelectors.all.addEventListener("click", function(){
  removeEventListener(); 
  createcards.all
})