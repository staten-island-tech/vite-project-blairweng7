import '../css/style.css';
import { Menu } from './menu';
import { DOMSelectors } from './dom';

//theme button
document.getElementById("Theme").addEventListener("click", function(){
  if(document.body.classList.contains("lightmode")){
    document.body.classList.add("darkmode");
     document.body.classList.remove("lightmode");
   } else{
    document.body.classList.add("lightmode")
    document.body.classList.remove("darkmode")
   }
 });


//cards
function addcards (arr){
  arr.forEach((ugh) => {
    DOMSelectors.container.insertAdjacentHTML("afterend", 
    `
    <div class="card">
    <h4 class="food-name"> ${ugh.name}</h4>
   <img src="${ugh.img}" alt="" class="card-img">
    <h5 class="price"> ${ugh.price}</h5>
  </div>
    `
)})};
addcards(Menu)
console.log(Menu)

function removeCards(){
  const clear = document.getElementById("container");
  clear.innerHTML = ""
};
//buttons 
let buttons = document.querySelectorAll(".filterButton")

const filterButtons = (buttons.forEach((buttons) => buttons.addEventListener("click", function(){
  let type = buttons.textContent;
  let newArr = Menu.filter((food) => food.type.includes(type));
  removeCards();
  addcards(newArr);
})))

/*
const types = {
  breakfast: Menu.filter((breakfast)=> breakfast.type === 'breakfast'), 
  lunch: Menu.filter((lunch)=> lunch.type === 'lunch'),
  dinner: Menu.filter((dinner)=> dinner.type === 'dinner'),
  dessert: Menu.filter((dessert)=> dessert.type === 'dessert'),
  vegetarian: Menu.filter((vegetarian)=> vegetarian.vegetarian === true),
  drink: Menu.filter((drink)=> drink.type === 'drink'),
}
DOMSelectors.all.addEventListener("click", function(){
  removeCards(); 
  addCards.all(Menu);
  types.all;
});

DOMSelectors.breakfast.addEventListener("click", function(){
  removeCards();
  addCards.breakfast(Menu);
  types.breakfast;
});

DOMSelectors.lunch.addEventListener("click", function(){
  removeCards();
  addCards.lunch(Menu);
  types.lunch;
});

DOMSelectors.vegetarian.addEventListener("click", function(){
  removeCards();
  addCards.vegetarian(Menu);
  types.vegetarian;
});

DOMSelectors.drink.addEventListener("click", function(){
  removeCards();
  addCards.drink(Menu);
  types.drink;
})
*/

DOMSelectors.form.addEventListener("click", function(event){
  event.preventDefault();
  removeCards();
  filterButtons();
})