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

buttons.forEach((buttons) => buttons.addEventListener("click", function(){
  let type = buttons.textContent;
  let newArr = Menu.filter((food) => food.name === type);
  removeCards();
  addcards(newArr);
}))

DOMSelectors.form.addEventListener("click", function(event){
  event.preventDefault();
  removeCards();
  addcards(Menu);
})