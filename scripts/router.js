const data = require('./dataProvider.js');
const paintings = data.paintings;
const galleries = data.galleries;
const artists = data.artists;
const api = 'localhost:8080';

const handleAllPaintings = (app) => {
    app.get("/api/paintings", (req, res) => {
        res.json(paintings);
    });
};

const handleByPaintingId = (app) => {
    app.get("/api/painting/:id", (req, res) => {
        const id = req.params.id;
        const painting = paintings.find(p => p.paintingID == id);
        if (painting) {
            res.json(painting);
        } else {
            res.status(404).send(`Painting with id ${id} not found`);
        }
    });
};

const handleByGalleryId = (app) => {
    app.get("/api/painting/gallery/:id", (req, res) => {
        const id = req.params.id;
        const gallery = paintings.filter(p => p.gallery.galleryID == id);
        if (gallery && gallery.length > 0) {
            res.json(gallery);
        } else {
            res.status(404).send(`Gallery with id ${id} not found`);
        }
    });
};

const handleByArtistId = (app) => {
    app.get("/api/painting/artist/:id", (req, res) => {
        const id = req.params.id;
        const artist = paintings.filter(p => p.artist.artistID == id);
        if (artist && artist.length > 0) {
            res.json(artist);
        } else {
            res.status(404).send(`Artist with id ${id} not found`);
        }
    });
};

const handleByYearMinMax = (app) => {
    app.get("/api/painting/year/:min/:max", (req, res) => {
        const year = req.params.year;
        const min = req.params.min;
        const max = req.params.max;
        const matches = paintings.filter(p => p.yearOfWork >= min && p.yearOfWork <= max);
        if (matches && matches.length > 0) {
            res.json(matches);
        } else {
            res.status(404).send(`No paintings found between ${min} and ${max}`);
        }
    });
};

const handleByTitle = (app) => {
    app.get("/api/painting/title/:text", (req, res) => {
        const title = req.params.text.toLowerCase();
        const matches = paintings.filter(p => p.title.toLowerCase().includes(title));
        if (matches && matches.length > 0) {
            res.json(matches);
        } else {
            res.status(404).send(`No paintings found with title ${title}`);
        }
    });
};

const handleByColor = (app) => { //look into how to do this one
    app.get("/api/painting/color/:name", (req, res) => {
        const name = req.params.name.toLowerCase();
        const matches = paintings.filter(p => 
            p.dominantColors.some(c =>
                color.name.toLowerCase().includes(name)
            )
        );
        if (matches && matches.length > 0) {
            res.json(matches);
        } else {
            res.status(404).send(`No paintings found with color ${color}`);
        }
    });
};

const handleAllArtists = (app) => {
    app.get("/api/artists", (req, res) => {
        res.json(artists);
    });
};

const handleArtistByCountry = (app) => {
    app.get("/api/artist/:country", (req, res) => {
        const country = req.params.country.toLowerCase();
        const matches = artists.filter(a => a.Nationality.toLowerCase() == country);
        if (matches && matches.length > 0) {
            res.json(matches);
        } else {
            res.status(404).send(`No artists found from ${country}`);
        }
    });
};

const handleAllGalleries = (app) => {
    app.get("/api/galleries", (req, res) => {
        res.json(galleries);
    });
};

const handleGalleryByCountry = (app) => {
    app.get("/api/galleries/:country", (req, res) => {
        const country = req.params.country.toLowerCase();
        const matches = galleries.filter(g => g.GalleryCountry.toLowerCase() == country);
        if (matches && matches.length > 0) {
            res.json(matches);
        } else {
            res.status(404).send(`No galleries found from ${country}`);
        }
    });
};

module.exports = {
    handleAllPaintings, handleByPaintingId, handleByGalleryId, handleByArtistId, handleByYearMinMax,
    handleByTitle, handleByColor, handleAllArtists, handleArtistByCountry,
    handleAllGalleries, handleGalleryByCountry
};

