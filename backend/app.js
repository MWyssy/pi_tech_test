const express = require("express");
const app = express();

const {getHealth} = require("./controllers/api.controller.js");
const {getListItems} = require("./controllers/list.controller.js");
const {
  postFruitveg,
  postMeat,
  postEssentials,
  postDrinks,
  postOther,
} = require("./controllers/post.controllers.js");
const {
  deleteFruitveg,
  deleteMeat,
  deleteEssentials,
  deleteDrinks,
  deleteOther,
} = require("./controllers/delete.controllers.js");

app.use(express.json());

// Health Check
app.get("/api/health", getHealth);

// Get all Shopping List items
app.get("/api", getListItems);

// Post Requests
app.post("/api/fruitveg", postFruitveg);
app.post("/api/meat", postMeat);
app.post("/api/essentials", postEssentials);
app.post("/api/drinks", postDrinks);
app.post("/api/other", postOther);

// Delete Requests
app.delete("/api/fruitveg/:id", deleteFruitveg);
app.delete("/api/meat/:id", deleteMeat);
app.delete("/api/essentials/:id", deleteEssentials);
app.delete("/api/drinks/:id", deleteDrinks);
app.delete("/api/other/:id", deleteOther);

//Error Handling
app.use((err, req, res, next) => {
  if (err.code === "23502") {
    res.status(400).send({msg: "Incomplete/invalid request"});
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({msg: "Invalid key/value format"});
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.status(400).send({msg: "Invalid request format"});
});

module.exports = app;
