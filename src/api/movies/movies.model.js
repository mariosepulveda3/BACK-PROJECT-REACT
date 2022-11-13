const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema (
    {
        title: { type: String, required: true},
        img: { type: String, required: true, default: "https://www.dogalize.com/wp-content/uploads/2017/03/gato-con-botas-dreamworks.jpg"},
        description: { type: String },
        year: { type: Number},
        director: { type: String}
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;