const {seed} = require("./seed");
const db = require("./connection");

const runSeed = () => {
  return seed().then(() => {
    return db.end();
  });
};

runSeed();
