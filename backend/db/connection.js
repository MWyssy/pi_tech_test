const {Pool} = require("pg");

if (!process.env.PGDATABASE) {
  throw new Error("NO PGDATADASE SET...");
}

module.exports = new Pool();
