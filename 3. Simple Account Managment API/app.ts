import express from 'express';
import bodyParser from 'body-parser';
import AccountsController from './dataMock/account.controller';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: AccountsController[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeControllers(controllers);
    }


    private initializeControllers(controllers: AccountsController[]) {
        controllers.forEach((controller) => {
            this.app
                .use(bodyParser.json())
                .use(bodyParser.urlencoded({ extended: true }))
                .use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;