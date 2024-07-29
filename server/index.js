
const express = require(`express`);
const logger = require(`morgan`);
const cors = require(`cors`); // allows connection
require(`dotenv`).config(); //.env

const { connectMongoDB } = require(`./db/mongoDB.js`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger(`dev`));
app.use(cors({origin: `*`, optionsSuccessStatus: 200}));


const characterRouter = require(`./routes/characterRouter.js`);
app.use(`/api/mcu`, characterRouter);

const movieRouter = require(`./routes/movieRouter.js`);
app.use(`/api/movie`, movieRouter);

const PORT = process.env.PORT;
app.listen(process.env.PORT, ()=> { 
    connectMongoDB();
    console.log(`02 fullstack-db listening to ${PORT}`);
})