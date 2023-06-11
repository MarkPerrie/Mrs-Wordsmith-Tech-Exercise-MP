"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const account_controller_1 = __importDefault(require("./dataMock/account.controller"));
const app = new app_1.default([
    new account_controller_1.default(),
], 5000);
app.listen();
