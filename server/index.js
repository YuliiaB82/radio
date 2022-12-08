const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const moodController = require("./controllers/mood-controller");
const spotifyController = require("./controllers/spotify-controller");
const app = express();

router.get("/moods", moodController.getMoods);
router.get("/auth/login", spotifyController.login);
router.get("/auth/callback", spotifyController.authCallback);
const jsonParser = bodyParser.json();
router.put("/changeDevice", jsonParser, spotifyController.changeDevice);
router.get("/search/:mood", spotifyController.search);
app.use("/api", router);
app.listen(5000);
