"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merapi_1 = require("merapi");
class GpioManager extends merapi_1.Component {
    constructor(config, logger) {
        super();
        this.config = config;
        this.logger = logger;
    }
    process(index, bool) {
        throw new Error("Method not implemented.");
    }
}
exports.default = GpioManager;
//# sourceMappingURL=gpio_manager.js.map