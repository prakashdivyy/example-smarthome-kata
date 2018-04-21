import { Component, IConfigReader, ILogger } from "merapi";
import { Request, Response, NextFunction } from "express";
import { IGpioManager } from "interfaces/managers";

export default class IndexController extends Component {
    constructor(private config: IConfigReader, private logger: ILogger, private gpioManager: IGpioManager) {
        super();
    }

    public hello(req: Request, res: Response, next: NextFunction) {
        res.send("Hello World!");
    }

    public async executeCommand(req: Request, res: Response, next: NextFunction) {
        let { gpioNumber, action } = req.body;
        if (gpioNumber && (action === "on" || action === "off")) {
            let bool = action === "on";
            let result = await this.gpioManager.process(gpioNumber, bool);
            res.send({
                status: "ok",
                result
            });
        } else {
            res.send({
                status: "error"
            });
        }
    }
}
