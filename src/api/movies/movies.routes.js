const express = require("express");
const Movie = require("./movies.model");
const upload = require("../../middlewares/file");
const { deleteFile } = require("../../middlewares/deleteFile");
const { isAdmin } = require("../../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json("Server error");
  }
});

router.get("/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movieToFind = await Movie.findById(id);
    return res.status(200).json(movieToFind);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/title/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const allMovies = await Movie.find({ title: title });
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// metemos dentro de upload.single, el campo model en la que va la imagen
router.post("/create", [isAdmin], upload.single("img"), async (req, res) => {
  try {
    const movie = req.body;
    if (req.file) {
      movie.img = req.file.path;
    }
    const newMovie = new Movie(movie);
    const created = await newMovie.save();
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/edit/:id", [isAdmin], upload.single("img"), async (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    const movieOld = await Movie.findById(id);

    if (req.file) {
      deleteFile(movieOld.img);
      movie.img = req.file.path;
    }
    const movieModify = new Movie(req.body);
    movieModify._id = id;
    const movieUpdated = await Movie.findByIdAndUpdate(id, movieModify);
    return res.status(201).json(movieUpdated);
  } catch (error) {
    return res.status(500).json("Error editing movie");
  }
});

router.delete("/delete/:id", [isAdmin], async (req, res) => {
  try {
    const id = req.params.id;
    const movieToDelete = await Movie.findByIdAndDelete(id);
    return res
      .status(200)
      .json("Movie deleted correctly");
  } catch (error) {
    return res.status(500).json("Could not delete movie");
  }
});

module.exports = router;
