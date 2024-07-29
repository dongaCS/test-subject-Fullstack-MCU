const Mongoose = require(`mongoose`);

const MovieSchema = new Mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    year: Number,
    cast: [],
    genres: [],
    href: String,
    extract: String,
    thumbnail: String
})

const Movie = Mongoose.model("Movie", MovieSchema);
module.exports = Movie;