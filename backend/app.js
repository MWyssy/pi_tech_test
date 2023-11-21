const express = require("express");
const app = express();

const {getHealth} = require("./controllers/api.controller");
const {getListItems} = require("./controllers/list.controller");

app.use(express.json());

// Health Check
app.get("/api/health", getHealth);

// Get all Shopping List items
app.get("/api", getListItems);

module.exports = app;
