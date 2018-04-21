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
class GpioManager extends merapi_1.Component {
    constructor(config, logger) {
        super();
        this.config = config;
        this.logger = logger;
        this.gpio = require("rpi-gpio");
        this.gpiop = this.gpio.promise;
        this.listGpio = this.config.default("config.gpioList", []);
        for (let x = 0; x < this.listGpio.length; x++) {
            this.gpio.setup(this.listGpio[x], this.gpio.DIR_OUT, (function () {
                this.logger.info(`Success activating GPIO ${this.listGpio[x]} as OUT`);
            }).bind(this));
        }
    }
    process(index, bool) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.listGpio.indexOf(index) > -1) {
                try {
                    yield this.gpiop.write(index, bool);
                    if (bool) {
                        this.logger.info(`Success turn on GPIO ${index}`);
                    }
                    else {
                        this.logger.info(`Success turn off GPIO ${index}`);
                    }
                    return true;
                }
                catch (err) {
                    this.logger.info(`Error processing GPIO ${index}`);
                    return false;
                }
            }
            else {
                this.logger.info(`GPIO ${index} not on list`);
                return false;
            }
        });
    }
}
exports.default = GpioManager;
//# sourceMappingURL=gpio_manager.js.map