"use strict";
exports.__esModule = true;
var express_1 = require("express");
var compression_1 = require("compression");
var path_1 = require("path");
var signale_1 = require("signale");
var app = express_1["default"]();
app.use(compression_1["default"]());
app.use('/static', express_1["default"].static(path_1["default"].join(__dirname, './build/static')));
app.get('/*', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, './build/index.html'));
});
var PORT = (process.env.PORT || 5000);
app.listen(PORT, '0.0.0.0', function (err) {
    if (err) {
        signale_1["default"].error(err);
    }
    signale_1["default"].info("==> \uD83C\uDF0E app listening on http://localhost:" + PORT + ".");
});
