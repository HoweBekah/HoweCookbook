xhr.open("GET", "/getRecipes");

xhr.responseType = "json";

xhr.send();

// the response is {"message": "Hello, world!"}
xhr.onload = function() {
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
