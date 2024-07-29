const router = require(`express`).Router();
const { getMovie } = require(`../controllers/movieController`)

router.get('/:title', async(req, res) => {
    try {
        const data = await getMovie(req.params.title);
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


module.exports = router;