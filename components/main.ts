import { Component, ILogger, IConfigReader } from "merapi";

export default class Main extends Component {

    constructor(private config: IConfigReader, private logger: ILogger) {
        super();
    }

    public async start() {
        this.logger.info(`Starting ${this.config.get("name")}...`);
    }
}
