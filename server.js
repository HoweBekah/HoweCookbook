const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const PORT = process.env.PORT || 8080;
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://lnxyzbmmxwnblv:c30b2ddfb5a4b8b7d34fbf52b996d2aaa2e17f76ef29685bf6500ca6bd889efb@ec2-54-227-249-202.compute-1.amazonaws.com:5432/d5ulosfd7q0u70";
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app
  .get("/dbConnect", function(req, res) {
    const pool = new Pool({ connectionString: connectionString });
    var sql = "Select * FROM category";
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
