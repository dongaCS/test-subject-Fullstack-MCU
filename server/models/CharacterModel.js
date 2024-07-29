const Mongoose = require(`mongoose`);

const CharacterSchema = new Mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }, 
    debutFilm: String,
    debutYear: Number
});

const Character = Mongoose.model("Character", CharacterSchema);

module.exports = Character;