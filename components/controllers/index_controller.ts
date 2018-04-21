import { Component, IConfigReader, ILogger } from "merapi";
import { Request, Response, NextFunction } from "express";

export default class IndexController extends Component {
    constructor(private config: IConfigReader, private logger: ILogger) {
        super();
    }

    public hello(req: Request, res: Response, next: NextFunction) {
        res.send("Hello World!");
    }
}
