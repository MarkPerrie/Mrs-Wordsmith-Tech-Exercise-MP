
import * as express from 'express';
import Account from './account.interface';

class AccountsController {
    public path = '/accounts';
    public router = express.Router();


    private accounts: Account[] = [
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
    ]

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllAccounts);
        this.router.get(`${this.path}/:id`, this.getAccountById);
        this.router.post(this.path, this.createAccount);
        this.router.put(`${this.path}/:id`, this.updateAccount);
        this.router.delete(`${this.path}/:id`, this.deleteAccount);

    }

    getAllAccounts = (request: express.Request, response: express.Response) => {
        response.send(this.accounts);
    }

    getAccountById = (request: express.Request, response: express.Response) => {
        const id: number = parseInt(request.params.id);
        try {
            response.send(this.accounts.find(account => {
                return account.id === id
            }))
        }
        catch {
            response.send("No account with that id")
        }
    }

    createAccount = (request: express.Request, response: express.Response) => {
        const account: Account = request.body;
        this.accounts.push(account);
        response.send(this.accounts);
    }

    updateAccount = (request: express.Request, response: express.Response) => {
        const account: Account = request.body;
        const id: number = parseInt(request.params.id);
        const objWithIdIndex = this.accounts.findIndex((account) => account.id === id);
        this.accounts.splice(objWithIdIndex, 1);
        this.accounts.push(account);
        response.send(this.accounts.find(account => { return account.id === id }));
    }

    deleteAccount = (request: express.Request, response: express.Response) => {
        const element: number = parseInt(request.params.id) - 1;
        try {
            delete this.accounts[element]
            response.send(`account with id of ${element + 1} deleted`)
        }
        catch {
            response.send("No account with that element to delete")
        }
    }
}

export default AccountsController;