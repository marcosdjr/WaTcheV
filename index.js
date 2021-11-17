require('dotenv').config()

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3001;
//const port = 3001;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

var movielist = [
  {
    title: "O Fabuloso Destino de Amelie Poulain",
    direction: "Marcos",
    release: "02/02/2002",
    genre: "drama",
    rating: "5",
    status: "watched",
    cover:
      "https://img.elo7.com.br/product/original/1F4B96B/poster-cartaz-o-fabuloso-destino-de-amelie-poulain-c-moldura-amor.jpg",
  },
  {
    title: "A espuma dos dias",
    direction: "Marquito",
    release: "03/03/2003",
    genre: "drama",
    rating: "4",
    status: "wishlist",
    cover:
      "https://br.web.img3.acsta.net/pictures/210/101/21010117_20130604142309589.jpg",
  },
  {
    title: "teste",
    direction: "Marcos",
    release: "02/02/2002",
    genre: "drama",
    rating: "5",
    status: "watched",
    cover:
      "https://img.elo7.com.br/product/original/1F4B96B/poster-cartaz-o-fabuloso-destino-de-amelie-poulain-c-moldura-amor.jpg",
  },
  {
    title: "teste",
    direction: "Marcos",
    release: "02/02/2002",
    genre: "drama",
    rating: "5",
    status: "watched",
    cover:
      "https://img.elo7.com.br/product/original/1F4B96B/poster-cartaz-o-fabuloso-destino-de-amelie-poulain-c-moldura-amor.jpg",
  },
  {
    title: "teste",
    direction: "Marcos",
    release: "02/02/2002",
    genre: "drama",
    rating: "5",
    status: "watched",
    cover:
      "https://img.elo7.com.br/product/original/1F4B96B/poster-cartaz-o-fabuloso-destino-de-amelie-poulain-c-moldura-amor.jpg",
  },
  {
    title: "teste",
    direction: "Marcos",
    release: "02/02/2002",
    genre: "drama",
    rating: "5",
    status: "watched",
    cover:
      "https://img.elo7.com.br/product/original/1F4B96B/poster-cartaz-o-fabuloso-destino-de-amelie-poulain-c-moldura-amor.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    movie: movielist,
  });
});

app.post("/movieinsert", (req, res) => {
  const { title, direction, release, genre, rating, status, cover } = req.body;
  const mov = {
    title: title,
    direction: direction,
    release: release,
    genre: genre,
    rating: rating,
    status: status,
    cover: cover,
  };

  movielist.push(mov);
  res.redirect("/");
});

app.get("/details/:title", (req, res) => {
  res.render("details", { movie: movielist.filter(i => i.title === req.params.title), title: req.params.title });
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/insert", (req, res) => {
  res.render("insert");
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
