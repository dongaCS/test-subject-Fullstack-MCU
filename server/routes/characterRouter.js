const router = require(`express`).Router();
const { getAllCharacters, 
        postCreateCharacter,
        getCharacterByName,
        putUpdateCharacter,
        deleteCharacter, } = require(`../controllers/characterController.js`)


router.get(`/`, async(req, res) => {
    try {
        const data = await getAllCharacters();
        res.json({
            message: "success",
            payload: data
        });
    } catch (err) {
        const packet = {
            message: "",
            payload: err,
        };
        console.log(packet);
        res.json(packet);
    }
});


router.post(`/createCharacter`, async(req, res) => {
    try {
        const data = await postCreateCharacter(req.body);
        res.json({
            message: "success",
            payload: data
        });
    } catch (err) {
        const packet = {
            message: "failure",
            payload: err,
        };
        console.log(packet);
        res.json(packet);
    }
});


router.get(`/getCharacterByName/:name`, async(req, res) => {
    try {
        const data = await getCharacterByName(req.params.name);
        res.json({
            message: "success",
            payload: data
        });
    } catch (err) {
        const packet = {
            message: "failure",
            payload: err,
        };
        console.log(packet);
        res.json(packet);
   }
});


router.put(`/updateCharacter/:name`, async(req, res) => {
    try {
        const data = await putUpdateCharacter(req.body);
        res.json({
            message: "success",
            payload: data
        });
    } catch (err) {
        const packet = {
            message: "failure",
            payload: err,
        };
        console.log(packet);
        res.json(packet);
   }
})

router.delete(`/deleteCharacter/:name`, async(req, res) => {
    try{
        const data = await deleteCharacter(req.params.name);
        res.json({
            message: "success",
            payload: data
        });
    } catch (err) {
        const packet = {
            message: "failure",
            payload: err,
        };
        console.log(packet);
        res.json(packet);
   }
})


module.exports = router;
