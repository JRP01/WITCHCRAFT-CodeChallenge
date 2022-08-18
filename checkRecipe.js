import findIngredientBeforeRule from "./readIngredientsRules.js";

const checkRecipe = (recipe) => {
  let safe = "safe";
  for (let i = 0; i < recipe.length; i++) {
    let ingredient = recipe[i];
    let beforeRules = findIngredientBeforeRule(ingredient);
    beforeRules = beforeRules[0].beforeRule;
    if (i < recipe.length - 1) {
      let nextIngredient = recipe[i + 1];
      const rules = beforeRules.includes(nextIngredient);
      if (rules) {
        safe = "unsafe";
      }
    }
  }

  return safe;
};

export default checkRecipe;
