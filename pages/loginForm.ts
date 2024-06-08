import { Locator, Page } from "playwright";
import { User } from "../types/userType";

export class LoginForm {
  private readonly page: Page;
  private readonly logInTab: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly logInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInTab = page.getByText("Log In").nth(1);
    this.emailInput = page.getByRole("textbox", {
      name: "Enter your email or cTrader ID",
    });
    this.passwordInput = page.getByRole("textbox", {
      name: "Enter your password",
    });
    this.logInBtn = page.getByRole("button", { name: "Log In" }).nth(1);
  }

  async switchToLoginTab() {
    await this.logInTab.click();
  }

  async fillOutEmailAndPasswordFields(user: User) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
  }

  async clickOnLogInButton() {
    await this.logInBtn.click();
  }
}
