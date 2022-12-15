"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_1 = __importDefault(require("./handlers/users"));
var orders_1 = __importDefault(require("./handlers/orders"));
var products_1 = __importDefault(require("./handlers/products"));
var app = (0, express_1.default)();
var adress = "0.0.0.0:3000";
var port = 3000;
var corsOptions = {
    origin: 'http://someotherdomain.com',
    optionSuccessStatud: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    var message = '<h2 style="color: blue; margin-top:137px; background-color:yellow; text-align: center ;"   > Welcome To The Main Api! </h2>';
    res.send(message);
});
app.get('/test-cors', (0, cors_1.default)(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled with a middleware' });
});
(0, users_1.default)(app);
(0, orders_1.default)(app);
(0, products_1.default)(app);
app.listen(3000, function () {
    console.log("listening on port ".concat(port, "!"));
});
exports.default = app;
