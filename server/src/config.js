require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET,
  dbconfig: {
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE,
    port: process.env.MY_SQL_PORT,
  },
};
