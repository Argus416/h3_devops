const DB_CONNECTION_CONFIG = require("./config");
const pg = require("knex")({
    client: "pg",
    connection: DB_CONNECTION_CONFIG,
    searchPath: ["knex", "public"],
    ssl: { rejectUnauthorized: false }

});

module.exports = pg;