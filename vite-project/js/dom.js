const DOMSelectors = {
  form: document.querySelector("#form"),
  container: document.getElementById("#container"),
  card: DOMSelectors.querySelector('#box'),
  all: DOMSelectors.querySelector("#all-btn"),
  breakfast: DOMSelectors.querySelector("#breakfast-btn"),
  lunch: DOMSelectors.querySelector("#lunch-btn"),
  dinner: DOMSelectors.querySelector("#dinner-btn"),
  vegetarian: DOMSelectors.querySelector("#vegetarian-btn"),
  drink: DOMSelectors.querySelector("#drink-btn"),
  dessert: DOMSelectors.querySelector("#dessert-btn"),
};
console.log(DOMSelectors);

export { DOMSelectors };
