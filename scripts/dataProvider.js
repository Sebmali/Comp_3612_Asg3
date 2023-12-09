const path = require('path');
const fs = require('fs');

const paintingsJsonPath = path.join(__dirname, '../data', 'paintings-nested.json');
const paintingsJsonData = fs.readFileSync(paintingsJsonPath, 'utf8');
const paintings = JSON.parse(paintingsJsonData);

const galleriesJsonPath = path.join(__dirname, '../data', 'galleries.json');
const galleriesJsonData = fs.readFileSync(galleriesJsonPath, 'utf8');
const galleries = JSON.parse(galleriesJsonData);

const artistsJsonPath = path.join(__dirname, '../data', 'artists.json');
const artistsJsonData = fs.readFileSync(artistsJsonPath, 'utf8');
const artists = JSON.parse(artistsJsonData);

module.exports = {paintings, galleries, artists}