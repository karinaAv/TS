import { Page } from "playwright";
import { HomePage } from "./homePage";
import { CreateOrderForm } from "./createOrderForm";
import { LoginForm } from "./loginForm";

export class PageManager {
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly createOrderForm: CreateOrderForm;
  private readonly loginForm: LoginForm;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.createOrderForm = new CreateOrderForm(this.page);
    this.loginForm = new LoginForm(this.page);
  }

  onHomePage() {
    return this.homePage;
  }

  onLogInForm() {
    return this.loginForm;
  }

  onCreateOrderForm() {
    return this.createOrderForm;
  }
}
