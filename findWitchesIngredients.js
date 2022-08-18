import witchData from "./witch-data_json.json" assert { type: "json" };

function findWitchIngredients(witch) {
  const witchInfo = witchData.filter((x) => x.name === witch);
  return witchInfo[0].ingredients
}

export default findWitchIngredients;
