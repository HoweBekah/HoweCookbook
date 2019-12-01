const express = require("express");
const ajax = require("ajax");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var app = express();
function tryit() {
  //   $.ajax({
  //     url: "/getRecipes",
  //     method: "GET"
  //   }).then(function(BeveragesJSON) {
  //     let results = "";
  //     for (var i = 0; i < result.rows.length; i++) {
  //       results = BeveragesJSON.result.rows[i].recipe_name;

  //       $("#ulgarbage").append(results);
  //     }
  //   });

  xhr.open("GET", "/getRecipes");

  xhr.responseType = "json";

  xhr.send();

  // the response is {"message": "Hello, world!"}
  function search() {
    //alert("Hello Korbin!!!");

    var searchTerm = document.getElementById("txtSearch").value;

    console.log(searchTerm);

    var htmlapi = "http://www.omdbapi.com/";
    var params = "?apikey=964cfd45&s=" + searchTerm;

    var wholeURL = htmlapi + params;

    var http = new XMLHttpRequest();

    http.onload = function() {
      if (http.readyState == 4 && http.status == 200) {
        console.log("We have data!");
        console.log(http.response);

        var jsonData = JSON.parse(http.response);
        var ourTable = document.getElementById("table");

        ourTable.innerHTML =
          "<tr>" + "<th>Title</th>" + "<th>MORE CLICKS!!!</th>" + "</tr>";

        for (let i = 0; i < jsonData.Search.length; i++) {
          var title = jsonData.Search[i].Title;
          var id = jsonData.Search[i].imdbID;

          // new row
          var newRow = ourTable.insertRow(-1);

          // new cell 1
          var cell = newRow.insertCell(-1);
          cell.innerHTML = title;

          // new cell 2
          var cell2 = newRow.insertCell(-1);
          cell2.innerHTML =
            // v--- LOOK HOW NICE THIS IS!! ---v
            `<button onclick="foo('${id}')">Details</button>`;
        }
      } else {
        console.log("nothing yet ...");
      }
    };

    http.open("GET", wholeURL);
    http.send();
  }
}
