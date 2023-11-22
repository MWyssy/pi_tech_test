const {
  addFruitveg,
  addMeat,
  addEssentials,
  addDrinks,
  addOther,
} = require("../models/post.models.js");

// Fruit and Veg
exports.postFruitveg = (req, res, next) => {
  addFruitveg(req.body)
    .then((result) => {
      if (result.hasOwnProperty("code")) {
        next(result);
      } else {
        res.status(201).send({listItem: result});
      }
    })
    .catch(next);
};

// Meat
exports.postMeat = (req, res, next) => {
  addMeat(req.body)
    .then((result) => {
      if (result.hasOwnProperty("code")) {
        next(result);
      } else {
        res.status(201).send({listItem: result});
      }
    })
    .catch(next);
};

// Essentials
exports.postEssentials = (req, res, next) => {
  addEssentials(req.body)
    .then((result) => {
      if (result.hasOwnProperty("code")) {
        next(result);
      } else {
        res.status(201).send({listItem: result});
      }
    })
    .catch(next);
};

// Drinks
exports.postDrinks = (req, res, next) => {
  addDrinks(req.body)
    .then((result) => {
      if (result.hasOwnProperty("code")) {
        next(result);
      } else {
        res.status(201).send({listItem: result});
      }
    })
    .catch(next);
};

// Other
exports.postOther = (req, res, next) => {
  addOther(req.body)
    .then((result) => {
      if (result.hasOwnProperty("code")) {
        next(result);
      } else {
        res.status(201).send({listItem: result});
      }
    })
    .catch(next);
};
