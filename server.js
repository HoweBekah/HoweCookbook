const express = require("express");
const path = require("path");
const { Pool } = require("pg");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connectionString = process.env.DATABASE_URL;
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app
  .get("/dbConnect", function(req, res) {
    const pool = new Pool({ connectionString: connectionString });
    var sql = "Select recipe_name FROM recipes";
    pool.query(sql, function(err, result) {
      if (err) {
        console.log("Error in query: ");
        console.log(err);
      }
      console.log("Back from DB with result:");

      console.log(result.rows);
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
