import promptSync from "prompt-sync";
import findWitchIngredients from "./findWitchesIngredients.js";
import ingredientsPowerSet from "./ingredientsPowerSet.js";
import checkRecipe from "./checkRecipe.js";

let safe = [];
let unsafe = [];

const prompt = promptSync();

const witch = prompt("Which Witches recipes would you like? ");

const ingredients = findWitchIngredients(witch);

const powerset = ingredientsPowerSet(ingredients);

for (let i = 0; i < powerset.length; i++) {
  let recipe = powerset[i];

  const saftey = checkRecipe(recipe);

  if (saftey === "unsafe") {
    unsafe.push(powerset[i]);
  } else {
    safe.push(powerset[i]);
  }
}
console.log("Safe Recipes: ");
console.log(safe)
console.log("Unsafe Recipes: ");
console.log(unsafe)
