const {
  removeFruitveg,
  removeMeat,
  removeEssentials,
  removeDrinks,
  removeOther,
} = require("../models/delete.models.js");

// Fruit and Veg
exports.deleteFruitveg = (req, res) => {
  console.log(req.params);
  removeFruitveg(req.params.id).then((result) => {
    res.status(200).send({deletedItem: result});
  });
};

// Meat
exports.deleteMeat = (req, res) => {
  removeMeat(req.params.id).then((result) => {
    res.status(200).send({deletedItem: result});
  });
};

// Essentials
exports.deleteEssentials = (req, res) => {
  removeEssentials(req.params.id).then((result) => {
    res.status(200).send({deletedItem: result});
  });
};

// Drinks
exports.deleteDrinks = (req, res) => {
  removeDrinks(req.params.id).then((result) => {
    res.status(200).send({deletedItem: result});
  });
};

// Other
exports.deleteOther = (req, res) => {
  removeOther(req.params.id).then((result) => {
    res.status(200).send({deletedItem: result});
  });
};
