const db = require("../db/connection");

// Remove a Fruit or Veg to the list
exports.removeFruitveg = (id) => {
  return db
    .query(
      `
        DELETE FROM fruitveg 
            WHERE fruitveg_id = $1 
            RETURNING *;
        `,
      [id]
    )
    .then(({rows}) => {
      return rows[0];
    });
};

// Remove a Meat item to the list
exports.removeMeat = (id) => {
  return db
    .query(
      `
        DELETE FROM meat 
            WHERE meat_id = $1 
            RETURNING *;
        `,
      [id]
    )
    .then(({rows}) => {
      return rows[0];
    });
};

// Remove an essential to the list
exports.removeEssentials = (id) => {
  return db
    .query(
      `
        DELETE FROM essentials 
            WHERE essentials_id = $1 
            RETURNING *;
        `,
      [id]
    )
    .then(({rows}) => {
      return rows[0];
    });
};

// Remove a Drink to the list
exports.removeDrinks = (id) => {
  return db
    .query(
      `
        DELETE FROM drinks 
            WHERE drinks_id = $1 
            RETURNING *;
        `,
      [id]
    )
    .then(({rows}) => {
      return rows[0];
    });
};

// Remove a 'Other' item to the list
exports.removeOther = (id) => {
  return db
    .query(
      `
        DELETE FROM other 
            WHERE other_id = $1 
            RETURNING *;
        `,
      [id]
    )
    .then(({rows}) => {
      return rows[0];
    });
};
