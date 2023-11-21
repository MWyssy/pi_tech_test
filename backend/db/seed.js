const db = require("./connection");

const seed = () => {
  return db
    .query(`DROP TABLE IF EXISTS fruitveg;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS meat;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS essentials;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS drinks;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS other;`);
    })
    .then(() => {
      return db.query(`CREATE TABLE fruitveg (
            fruitveg_id SERIAL PRIMARY KEY,
            fruitveg_name VARCHAR(40) NOT NULL
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE meat (
            meat_id SERIAL PRIMARY KEY,
            meat_name VARCHAR(40) NOT NULL
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE essentials (
            essentials_id SERIAL PRIMARY KEY,
            essentials_name VARCHAR(40) NOT NULL
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE drinks (
            drinks_id SERIAL PRIMARY KEY,
            drinks_name VARCHAR(40) NOT NULL
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE other (
            other_id SERIAL PRIMARY KEY,
            other_name VARCHAR(40) NOT NULL
        );`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {seed};
