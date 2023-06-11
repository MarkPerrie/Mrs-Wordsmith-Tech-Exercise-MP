"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class AccountsController {
    constructor() {
        this.path = '/accounts';
        this.router = express.Router();
        this.accounts = [
            {
                "id": 1,
                "name": "Tom",
                "email": "tom@gmail.com",
                "address": "123 Tom Street",
                "postcode": "TOM10M",
                "phone": 447344965356,
                "subscribed": true
            },
            {
                "id": 2,
                "name": "Dick",
                "email": "dick@gmail.com",
                "address": "123 Dick Road",
                "postcode": "RIC10M",
                "phone": 447578962910,
                "subscribed": true
            },
            {
                "id": 3,
                "name": "Harry",
                "email": "harry@gmail.com",
                "address": "123 Harry Avn",
                "postcode": "HAR10M",
                "phone": 447545962356,
                "subscribed": false
            }
        ];
        this.getAllAccounts = (request, response) => {
            response.send(this.accounts);
        };
        this.getAccountById = (request, response) => {
            const id = parseInt(request.params.id);
            try {
                response.send(this.accounts.find(account => {
                    return account.id === id;
                }));
            }
            catch (_a) {
                response.send("No account with that id");
            }
        };
        this.createAccount = (request, response) => {
            const account = request.body;
            this.accounts.push(account);
            response.send(this.accounts);
        };
        this.updateAccount = (request, response) => {
            const account = request.body;
            const id = parseInt(request.params.id);
            const objWithIdIndex = this.accounts.findIndex((account) => account.id === id);
            this.accounts.splice(objWithIdIndex, 1);
            this.accounts.push(account);
            response.send(this.accounts.find(account => { return account.id === id; }));
        };
        this.deleteAccount = (request, response) => {
            const element = parseInt(request.params.id) - 1;
            try {
                delete this.accounts[element];
                response.send(`account with id of ${element + 1} deleted`);
            }
            catch (_a) {
                response.send("No account with that element to delete");
            }
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllAccounts);
        this.router.get(`${this.path}/:id`, this.getAccountById);
        this.router.post(this.path, this.createAccount);
        this.router.put(`${this.path}/:id`, this.updateAccount);
        this.router.delete(`${this.path}/:id`, this.deleteAccount);
    }
}
exports.default = AccountsController;
