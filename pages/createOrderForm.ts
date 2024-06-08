import { Locator, Page } from "playwright";

export class CreateOrderForm {
  private readonly page: Page;
  private readonly placeOrderBtn: Locator;
  private readonly okBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderBtn = page.getByRole("button", { name: "Place Order" });
    this.okBtn = page.getByText("OK");
  }

  async clickOnPlaceOrderButton() {
    await this.placeOrderBtn.click();
  }

  async clickOnOkButton() {
    await this.okBtn.click();
  }
}
