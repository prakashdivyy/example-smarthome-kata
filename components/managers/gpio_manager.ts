import { Component, IConfigReader, ILogger } from "merapi";
import { IGpioManager } from "interfaces/managers";

export default class GpioManager extends Component implements IGpioManager {
    constructor(private config: IConfigReader, private logger: ILogger) {
        super();
    }

    public process(index: number, bool: boolean): void {
        throw new Error("Method not implemented.");
    }
}