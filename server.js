const express = require("express");
const path = require("path");
//const { Pool } = require("pg");
// const ajax = require("ajax");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const connectionString = process.env.DATABASE_URL;
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));

// $.ajax({
//   url: "/getRecipes",
//   method: "GET"
// }).then(function(BeveragesJSON) {
//   let results = "";
//   for (var i = 0; i < result.rows.length; i++) {
//     results = BeveragesJSON.result.rows[i].recipe_name;

//     $("#ulgarbage").append(results);
//   }
// });

app
  .get("/getRecipes", function(req, res) {
    // const pool = new Pool({ connectionString: connectionString });
    // var sql = "Select * FROM recipes WHERE category = 'Beverages'";
    // pool.query(sql, function(err, result) {
    xhr.open("GET", connectionString);

    xhr.responseType = "json";

    xhr.send();

    // the response is {"message": "Hello, world!"}
    xhr.onload = function(xhr) {
      // let results = "";
      // for (var i = 0; i < result.rows.length; i++) {
      //   results = BeveragesJSON.result.rows[i].recipe_name;

      //   $("#ulgarbage").append(results);}
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("We have data!");
        console.log(xhr.response);

        //var jsonData = JSON.parse(http.response);
        // var ourTable = document.getElementById('table');

        // ourTable.innerHTML =
        // '<tr>' +
        //     '<th>Title</th>' +
        //     '<th>MORE CLICKS!!!</th>' +
        // '</tr>';

        // for (let i = 0; i < jsonData.Search.length; i++) {
        //     var title = jsonData.Search[i].Title;
        //     var id = jsonData.Search[i].imdbID;

        //     // new row
        //     var newRow = ourTable.insertRow(-1);

        //     // new cell 1
        //     var cell = newRow.insertCell(-1);
        //     cell.innerHTML = title;

        //     // new cell 2
        //     var cell2 = newRow.insertCell(-1);
        //     cell2.innerHTML =
        //     // v--- LOOK HOW NICE THIS IS!! ---v
        //     `<button onclick="foo('${id}')">Details</button>`;
        // }
      } else {
        console.log("nothing yet ...");
      }
    };
    //   if (err) {
    //     console.log("Error in query: ");
    //     console.log(err);
    //   }

    //   //console.log(result.rows);
    //   //const results = JSON.stringify(result.rows);
    //   //console.log(results);
    //   let results = "";
    //   for (var i = 0; i < result.rows.length; i++) {
    //     let jSONObj = JSON.stringify(result.rows[i].recipe_name);
    //     console.log(jSONObj);

    //     results += trimChar(jSONObj, '"') + " ";
    //   }
    //   //results += "</ul>";

    //   res.render("pages/testresults", {
    //     result: results
    //   });
    // });
    // function trimChar(string, charToRemove) {
    //   while (string.charAt(0) == charToRemove) {
    //     string = string.substring(1);
    //   }

    //   while (string.charAt(string.length - 1) == charToRemove) {
    //     string = string.substring(0, string.length - 1);
    //   }

    //   return string;
    // }
    // });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
