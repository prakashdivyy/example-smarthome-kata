import { Component, IConfigReader, ILogger } from "merapi";
import { IGpioManager } from "interfaces/managers";

export default class GpioManager extends Component implements IGpioManager {
    private gpio: any;
    private gpiop: any;
    private listGpio: number[];

    constructor(private config: IConfigReader, private logger: ILogger) {
        super();
        this.gpio = require("rpi-gpio");
        this.gpiop = this.gpio.promise;
        this.listGpio = this.config.default("config.gpioList", []);
        for (let x = 0; x < this.listGpio.length; x++) {
            this.gpio.setup(this.listGpio[x], this.gpio.DIR_OUT, (function () {
                this.logger.info(`Success activating GPIO ${this.listGpio[x]} as OUT`);
            }).bind(this));
        }
    }

    public async process(index: number, bool: boolean): Promise<boolean> {
        if (this.listGpio.indexOf(index) > -1) {
            try {
                await this.gpiop.write(index, bool);
                if (bool) {
                    this.logger.info(`Success turn on GPIO ${index}`);
                } else {
                    this.logger.info(`Success turn off GPIO ${index}`);
                }
                return true;
            } catch (err) {
                this.logger.info(`Error processing GPIO ${index}`);
                return false;
            }
        } else {
            this.logger.info(`GPIO ${index} not on list`);
            return false;
        }
    }
}