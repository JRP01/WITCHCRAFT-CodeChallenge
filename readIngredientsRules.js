const filename = "./ingredients.txt";
import fs from "fs";

const findIngredientBeforeRule = (ingredient) => {
  const ruleArray = [];

  const splitRules = (rules) => {
    rules = rules.replace("[", "");
    rules = rules.replace("]", "");
    rules = rules.split(", ");
    return rules;
  };

  var str = fs.readFileSync(filename, "utf8");
  var contents = str;
  const splitContents = contents.split("\n");
  for (let i = 0; i < splitContents.length; i++) {
    const obj = splitContents[i].split("-");
    const ingredient = obj[0].trim();

    const rules = obj[1].trim();
    let rulesSplit = rules.split("cannot be before ");
    rulesSplit = rulesSplit[1].split(", cannot be after ");
    let beforeRule = rulesSplit[0];
    beforeRule = splitRules(beforeRule);
    let afterRule = rulesSplit[1];
    afterRule = splitRules(afterRule);

    const ingredientRuleObj = {
      ingredient: ingredient,
      beforeRule: beforeRule,
      afterRule: afterRule,
    };
    ruleArray.push(ingredientRuleObj);
  }
  const rules = ruleArray.filter((x) => x.ingredient === ingredient);
  
  return rules
};

export default findIngredientBeforeRule;
