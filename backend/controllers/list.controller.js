const {selectListItems} = require("../models/list.model.js");

// Controller to get all shopping list items
exports.getListItems = (req, res) => {
  selectListItems().then((result) => {
    res.status(200).send({items: result});
  });
};
