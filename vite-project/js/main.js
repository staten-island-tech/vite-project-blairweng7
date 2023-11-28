import '../css/variables.css'
import { Menu } from './menu';
import { DOMSelectors } from './dom'

//button filtering
const types = {
  breakfast: Menu.filter((breakfast)=> breakfast.type === 'breakfast'), 
  lunch: Menu.filter((lunch)=> lunch.type === 'lunch'),
  dinner: Menu.filter((dinner)=> dinner.type === 'dinner'),
  dessert: Menu.filter((dessert)=> dessert.type === 'dessert'),
  vegetarian: Menu.filter((vegetarian)=> vegetarian.vegetarian === true),
  drink: Menu.filter((drink)=> drink.type === 'drink'),
}
//button
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(); 
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
addcard(Menu);

function remove(){
  const cards = document.querySelector(".gallery");
  cards.forEach((gallery)=> gallery.remove())
}

DOMSelectors.all.addEventListener("click", function(){
  remove(); 
  addcardcard.all();
  types.all;
});

DOMSelectors.breakfast.addEventListener("click", function(){
  remove();
  addcard.breakfast();
  types.breakfast;
});

DOMSelectors.lunch.addEventListener("click", function(){
  remove();
  addcard.lunch();
  types.lunch;
});

DOMSelectors.vegetarian.addEventListener("click", function(){
  remove();
  addcard.vegetarian();
  types.vegetarian;
});

DOMSelectors.drink.addEventListener("click", function(){
  remove();
  addcard.drink();
  types.drink;
})
