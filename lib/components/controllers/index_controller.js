"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merapi_1 = require("merapi");
class IndexController extends merapi_1.Component {
    constructor(config, logger) {
        super();
        this.config = config;
        this.logger = logger;
    }
    hello(req, res, next) {
        res.send("Hello World!");
    }
}
exports.default = IndexController;
//# sourceMappingURL=index_controller.js.map