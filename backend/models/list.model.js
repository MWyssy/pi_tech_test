const db = require("../db/connection");

// Model to query all items in the shopping list
exports.selectListItems = () => {
  const data = {};

  const selectFruitveg = db.query("SELECT * FROM fruitveg;").then((result) => {
    return {fruitveg: result.rows};
  });
  const selectMeat = db.query("SELECT * FROM meat;").then((result) => {
    return {meat: result.rows};
  });
  const selectEssentials = db
    .query("SELECT * FROM essentials;")
    .then((result) => {
      return {essentials: result.rows};
    });
  const selectDrinks = db.query("SELECT * FROM drinks;").then((result) => {
    return {drinks: result.rows};
  });
  const selectOther = db.query("SELECT * FROM other;").then((result) => {
    return {other: result.rows};
  });

  return Promise.all([
    selectFruitveg,
    selectMeat,
    selectEssentials,
    selectDrinks,
    selectOther,
  ]).then((values) => {
    values.forEach((category) => {
      data[Object.keys(category)[0]] = category[Object.keys(category)[0]];
    });
    return data;
  });
};
