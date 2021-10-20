const express = require("Express"),
  cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(cors());

app.get("api", function (req, res) {
  console.log("Called");
  res.send({ result: "go away" });
});
app.get("/hello", function (req, res) {
  console.log("called");
  res.send({ result: "OMG Hi" });
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
