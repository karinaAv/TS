import { Locator, Page } from "playwright";
import { expect } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  private readonly btnLogIn: Locator;
  private readonly btnNewOrder: Locator;
  private readonly ordersTab: Locator;
  private readonly positionsTab: Locator;
  private readonly infoIcon: Locator;
  private readonly yesBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btnLogIn = page.getByRole("button", { name: "Log In" });
    this.btnNewOrder = page.getByRole("button", { name: "New Order" }).nth(1);
    this.ordersTab = page.getByText("Orders").first();
    this.positionsTab = page.getByText("Positions").first();
    this.infoIcon = page.locator("#ic_info_button");
    this.yesBtn = page.getByRole("button", { name: "Yes" });
  }

  async clickOnLogInButtonOnHeader() {
    await this.btnLogIn.click({ force: true });
  }

  async switchToOrdersTabOnPositionsComponent() {
    await this.ordersTab.click();
  }
  async clickOnNewOrderButton() {
    await this.btnNewOrder.click();
  }

  async waitForPageToBeLoaded() {
    await this.page.waitForLoadState("domcontentloaded");
  }
  
  async verifyOrderIsCreatedAndDisplayedOnOrdersTab() {
    await expect(this.ordersTab).toContainText("1");
    await expect(this.infoIcon).toHaveCount(1);
  }

  async verifyPositionIsCreatedAndDisplayedOnPositionsTab() {
    await expect(this.positionsTab).toContainText("1");
    await expect(this.infoIcon).toHaveCount(1);
  }
}
