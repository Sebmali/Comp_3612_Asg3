const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static(path.join(__dirname, '../public')));

const router = require('./scripts/router.js');
router.handleAllPaintings(app);
router.handleByPaintingId(app);
router.handleByGalleryId(app);
router.handleByArtistId(app);
router.handleByYearMinMax(app);
router.handleByTitle(app);
router.handleByColor(app);
router.handleAllArtists(app);
router.handleArtistByCountry(app);
router.handleAllGalleries(app);
router.handleGalleryByCountry(app);

let port = 8080;
app.listen(port, () => {console.log(`Server running on port ${port}`)});
