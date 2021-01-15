var express = require("express");
const port = 3000;
const app = express();
var fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("count.txt", function (err, data) {
    if (err) {
      // Create a file dinamically
      fs.writeFile("count.txt", 1, function (err, data) {
        console.log("File Created");
      });
      res.send("Total Request: " + 1);
    } else {
      if (err) {
        console.log("error");
        return;
      }
      // Create a file & Data input
      fs.writeFile("count.txt", 1 + Number(data), function (err, data) {
        console.log("data is written ");
      });
      //   This Line for Calculation & show output
      res.send("Total request: " + (1 + Number(data)));
    }
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
