
import App from './app';
import AccountsController from './dataMock/account.controller';
 
const app = new App(
  [
    new AccountsController(),
  ],
  5000,
);
 
app.listen();