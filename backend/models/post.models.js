const db = require("../db/connection");
const sanitise = require("../utils/sanitise.js");

// Add a Fruit or Veg to the list
exports.addFruitveg = (newFruitveg) => {
  const insertStr = `INSERT INTO fruitveg(fruitveg_name)
  VALUES
    ('${sanitise(newFruitveg[Object.keys(newFruitveg)[0]])}')
  RETURNING *;`;
  return db
    .query(insertStr)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

// Add a Meat item to the list
exports.addMeat = (newMeat) => {
  const insertStr = `INSERT INTO meat(meat_name)
  VALUES
    ('${sanitise(newMeat[Object.keys(newMeat)[0]])}')
  RETURNING *;`;
  return db
    .query(insertStr)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

// Add an essential to the list
exports.addEssentials = (newEssentials) => {
  const insertStr = `INSERT INTO essentials(essentials_name)
  VALUES
    ('${sanitise(newEssentials[Object.keys(newEssentials)[0]])}')
  RETURNING *;`;
  return db
    .query(insertStr)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

// Add a Drink to the list
exports.addDrinks = (newDrinks) => {
  const insertStr = `INSERT INTO drinks(drinks_name)
  VALUES
    ('${sanitise(newDrinks[Object.keys(newDrinks)[0]])}')
  RETURNING *;`;
  return db
    .query(insertStr)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};

// Add a 'Other' item to the list
exports.addOther = (newOther) => {
  const insertStr = `INSERT INTO other(other_name)
  VALUES
    ('${sanitise(newOther[Object.keys(newOther)[0]])}')
  RETURNING *;`;
  return db
    .query(insertStr)
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      return err;
    });
};
