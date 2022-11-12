const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema (
    {
        title: { type: String, required: true},
        img: { type: String, required: true, default: ""},
        description: { type: String },
        year: { type: Number, required: true},
        director: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;