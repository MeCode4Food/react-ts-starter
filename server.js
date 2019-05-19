"use strict";
exports.__esModule = true;
var express = require("express");
var compression = require("compression");
var path = require("path");
var signale = require("signale");
var app = express();
app.use(compression());
app.use('/static', express.static(path.join(__dirname, './build/static')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'));
});
var PORT = (process.env.PORT || 5000);
app.listen(PORT, '0.0.0.0', function (err) {
    if (err) {
        signale.error(err);
    }
    signale.info("\uD83C\uDF0E app listening on http://localhost:" + PORT + ".");
});
