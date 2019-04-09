const express = require("express");
const path = require("path");

const app = express();

console.log(__dirname + 'dist/israel-elite-fitness')

app.use(express.static('dist/israel-elite-fitness'));

app.get('/*', (req,res) => {
    res.sendFile(path.join('dist/israel-elite-fitness/index.html'));
});

app.listen(process.env.PORT || 60123);