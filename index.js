const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3001;
//const port = 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

app.get("/insert", (req, res) => {
  res.render("insert");
});

