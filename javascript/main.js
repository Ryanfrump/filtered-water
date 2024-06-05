const okayWater = ["salt", "dirt", "calcite", "uranium", "rubber"];
const notOkayWater = ["uranium", "dirt"];

const water = function (waterList, waterFilter) {
  let filteredWater = [];
  for (i = 0; i < waterList.length; i++) {
    if (!waterFilter.includes(waterList[i])) {
      filteredWater.push(waterList[i]);
    }
  }
  return filteredWater;
};

const waterResults = water(okayWater, notOkayWater);

console.log(waterResults);
