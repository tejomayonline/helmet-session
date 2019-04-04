const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.get("/hack", (req, res) => res.render("hack", { message: req.query.q }));
app.post("/hack", (req, res) => {
  //   console.log(req.body);
  return res.render("hack", { message: req.body.q });
});
app.get("/", (req, res) => res.render("index", { message: req.query.message }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
