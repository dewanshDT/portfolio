const express = require("express");
const path = require("path");
const codepenData = require("./codepen.json");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const title = "()";
  const style = ""
  res.render("home", { title, style });
});

app.get("/about", (req, res) => {
  const title = ".about()";
  const style = "aboutstyle.css";
  res.render("about", { title, style });
});

app.get("/works", (req, res) => {
  const title = ".works()";
  const style = "workstyle.css";
  res.render("works", { title, style, codepenData });
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});

module.exports = app;