require("dotenv").config();

const DB_CONNECTION_CONFIG = {
	host: "dpg-cnuksle3e1ms73cp9ru0-a.frankfurt-postgres.render.com",
	user: "mohamad_0yuy_user",
	password: "2P8LALTCVXukhgE6ncsG8MlGkFzLBKV7",
	database: "mohamad_0yuy",
	port: 5432,
	ssl: { rejectUnauthorized: false },
};

module.exports = DB_CONNECTION_CONFIG;

