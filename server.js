const express = require("express")
  const path = require("path")
  const { Pool } = require("pg")
  const PORT = process.env.PORT || 8080
  const connectionString =
  process.env.DATABASE_URL ||
  "postgres://qiuovznbemorvg:adb5026cdc938a4626f710bce26a2fae1e1cb4763a6bdb2b33d1fdc555441fc3@ec2-107-22-239-155.compute-1.amazonaws.com:5432/d87u5hv5p5cd3n?ssl=true";
  ​
  var app = express()
    app.use(express.static(path.join(__dirname, 'public')))
    app.set("views", path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.get('/', (req, res) => res.render('pages/index'))
    app.get('/dbConnect', function(req, res){
     const pool = new Pool({connectionString: connectionString});
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
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
   

/*const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const PORT = process.env.PORT || 8080;
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://qiuovznbemorvg:adb5026cdc938a4626f710bce26a2fae1e1cb4763a6bdb2b33d1fdc555441fc3@ec2-107-22-239-155.compute-1.amazonaws.com:5432/d87u5hv5p5cd3n?ssl=true";

var app = express();

// view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
const pool = new Pool({ connectionString: connectionString });
var sql = "SELECT * FROM category";

pool
  .query(sql, function(err, result) {
    // If an error occurred...
    if (err) {
      console.log("Error in query: ");
      console.log(err);
    }

    // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
    console.log(result.rows);
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`));
*/