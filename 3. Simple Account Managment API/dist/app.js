"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeControllers(controllers);
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app
                .use(body_parser_1.default.json())
                .use(body_parser_1.default.urlencoded({ extended: true }))
                .use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
