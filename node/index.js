var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(express.json());


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});


app.get('/', function (req, res) {
  res.send("Hello")
});

app.use("/data", require("./routes/data"));

app.listen(8081, function () {
  console.log('Website started');
});
