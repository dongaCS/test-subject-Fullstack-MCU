const Character = require(`../models/CharacterModel`)


async function getAllCharacters() {
    try {
        let character = await Character.find({})
        return character;
    } catch (err) {
        throw err;
    }
}


async function postCreateCharacter(body) {
    try { 
        let newCharacter = await Character.create(body);
        return newCharacter
    } catch (err) {
        throw err;
    }
}


async function getCharacterByName(name) {
    try {
        let character = await Character.findOne({name: name});
        return character;
    } catch (err) {
        throw(err);
    }
}


async function putUpdateCharacter(body) {
    try {
        let character = await Character.findOne({name: body.name});
        // body.debutFilm and body.debutYear will not be "", handled before api call
        let update = {
            _id: character._id,
            name: character.name,
            debutFilm: body.debutFilm,
            debutYear: body.debutYear
        }

        await Character.updateOne(
            { _id: character._id },
            { $set: update },
        );

        return update; 
    } catch (err) {
        throw(err);
    }
}


async function deleteCharacter(name) {
    try{
        let character = await Character.deleteOne({name: name});
        return character;
    } catch (err) {
        throw(err);
    }
}

module.exports = {
    getAllCharacters,
    postCreateCharacter,
    getCharacterByName,
    putUpdateCharacter,
    deleteCharacter,
}