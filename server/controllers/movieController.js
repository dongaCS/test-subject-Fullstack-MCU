const Movie = require(`../models/MoviesModel`)

async function getMovie(title) {
    try {
        return await Movie.findOne({title: title})
    } catch (err) {
        throw(err)
    }
}

module.exports = {
    getMovie,
}