require("dotenv").config();
const express = require("express");
const mongodb = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const mySchema = require("./model/schema");
const path = require("path");

let db;
const app = express();
app.use(express.static(path.join(__dirname + "/public")));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const connectionString = process.env.MONGO_STRING;
mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    else {
      db = client.db("loveCalculator");
      const port = process.env.PORT || 4000;
      app.listen(port);
    }
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index");
});
var randomNumber;
var a;
var b;
var fn;
var sn;
app.post("/", (req, res) => {
  db.collection("loverName").insertOne(
    { First_name: req.body.fname, Second_name: req.body.sname },
    function (err, response) {
      data = {
        First_name: req.body.fname,
        Second_name: req.body.sname,
      };
    }
  );
  fn = req.body.fname;
  sn = req.body.sname;
  randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber > 50 && randomNumber < 79) {
    a = `${fn} +  ${sn} ( You are falling in love) = ${randomNumber} %`;
  } else if (randomNumber < 100 && randomNumber > 78) {
    a = `${fn} +  ${sn} ( True love is there ) = ${randomNumber} %`;
  } else {
    a = `${fn} +  ${sn} (Fake love!!) = ${randomNumber} %`;
  }
  res.render("result", { para: a });
});
