"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const merapi_1 = require("merapi");
class IndexController extends merapi_1.Component {
    constructor(config, logger, gpioManager) {
        super();
        this.config = config;
        this.logger = logger;
        this.gpioManager = gpioManager;
    }
    hello(req, res, next) {
        res.send("Hello World!");
    }
    executeCommand(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { gpioNumber, action } = req.body;
            if (gpioNumber && (action === "on" || action === "off")) {
                let bool = action === "on";
                let result = yield this.gpioManager.process(gpioNumber, bool);
                res.send({
                    status: "ok",
                    result
                });
            }
            else {
                res.send({
                    status: "error"
                });
            }
        });
    }
}
exports.default = IndexController;
//# sourceMappingURL=index_controller.js.map