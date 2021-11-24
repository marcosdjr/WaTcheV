require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
//const port = 3001;

const Movie = require("./models/movie");


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());

var message = "";

app.get("/", async (req, res) => {
  const movie = await Movie.findAll();

  setTimeout(() => {
    message = "";
  }, 7000);

  res.render("index", {
    movie,
    message,
  });
});



app.get("/insert", (req, res) => {
  res.render("insert", { message });
});


app.post("/movieinsert", async (req, res) => {
  const { title, direction, releasedate, genre, rating, status, cover } =
    req.body;

  if (
    !title ||
    !direction ||
    !releasedate ||
    !genre ||
    !rating ||
    !status ||
    !cover
  ) {
    res.render("insert", {
      message: "Para inserir um filme/série, preencha todos os campos!!!",
    });
  } else {
    try {
      const movie = await Movie.create({
        title,
        direction,
        releasedate,
        genre,
        rating,
        status,
        cover,
      });

      res.render("insert", {
        movie, message: "Filme/série inserido com sucesso!!!",
      });
    } catch (err) {
      console.log(err);
      res.render("insert", {
        message: "Ocorreu um erro. Tente novamente, por gentileza.",

      });
    }
  }
});

// app.get("/details/:title", (req, res) => {
//   res.render("details", { movie: movielist.filter(i => i.title === req.params.title), title: req.params.title });
// });



app.get("/register", (req, res) => {
  res.render("register");
});


// app.get("/details", (req, res) => {
//   res.render("details");
// });


app.get("/details/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);

  if (!movie) {
    res.render("details", {
      movie,
      message: "Filme/série não encontrado!",
      
    });
  }

  res.render("details", {
    movie, message
  });
});

app.get("/update/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);

  if (!movie) {
    res.render("update", {
      movie,
      message: "Filme/série não encontrado!",
    });
  }

  res.render("update", {
    movie, message
  });
});


app.post("/update/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);

  const { title, direction, releasedate, genre, rating, status, cover } =
    req.body;

    
    movie.title = title;
    movie.direction = direction;
    movie.releasedate = releasedate;
    movie.genre = genre;
    movie.rating = rating;
    movie.status = status;
    movie.cover = cover;
    
    if (
      !title ||
      !direction ||
      !releasedate ||
      !genre ||
      !rating ||
      !status ||
      !cover
      ) 
    { 
      res.render("update", {
        movie, 
        message: "Para atualizar as informações, preencha todos os campos!!!",
      });
    } 
    else 
    {

      const movieUpdate = await movie.save();

      res.render("update", {
      movie: movieUpdate,
      message: "Informação atualizada com sucesso!",
      });
    }
  
});


app.get("/delete/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);

  if (!movie) {
    res.render("delete", {
      movie,
      message: "Filme/série não encontrado!",
    });
  } 
  res.render("delete", {
    movie, message
  });
});

app.post("/delete/:id", async (req, res) => {
  const movie = await Movie.findByPk(req.params.id);

  if (!movie) {
    res.render("delete", {
      movie, 
      message: "Filme/Série não consta em sua lista!",
    });
  }

  await movie.destroy();

  message = "Filme/Série deletado!"

  res.redirect("/");
});


app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
