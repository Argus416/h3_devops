require("dotenv").config();

const DB_CONNECTION_CONFIG = {
	host: "postgres",
	user: "mohamad",
	password: "123321",
	database: "postgres",
	port: 5432,
};

module.exports = DB_CONNECTION_CONFIG;