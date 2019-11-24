const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const ajax = require("ajax");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connectionString = process.env.DATABASE_URL;
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));

$.ajax({
  url: "/getRecipes",
  method: "GET"
}).then(function(BeveragesJSON) {
  let results = "";
  for (var i = 0; i < result.rows.length; i++) {
    results = BeveragesJSON.result.rows[i].recipe_name;

    $("#ulgarbage").append(results);
  }
});

// app
//   .get("/getRecipes", function(req, res) {
//     const pool = new Pool({ connectionString: connectionString });
//     var sql = "Select * FROM recipes WHERE category = 'Beverages'";
//     pool.query(sql, function(err, result) {
//       if (err) {
//         console.log("Error in query: ");
//         console.log(err);
//       }

//       //console.log(result.rows);
//       //const results = JSON.stringify(result.rows);
//       //console.log(results);
//       let results = "";
//       for (var i = 0; i < result.rows.length; i++) {
//         let jSONObj = JSON.stringify(result.rows[i].recipe_name);
//         console.log(jSONObj);

//         results += trimChar(jSONObj, '"') + " ";
//       }
//       //results += "</ul>";

//       res.render("pages/testresults", {
//         result: results
//       });
//     });
//     function trimChar(string, charToRemove) {
//       while (string.charAt(0) == charToRemove) {
//         string = string.substring(1);
//       }

//       while (string.charAt(string.length - 1) == charToRemove) {
//         string = string.substring(0, string.length - 1);
//       }

//       return string;
//     }
//   })
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));
