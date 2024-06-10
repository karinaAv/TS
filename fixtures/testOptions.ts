import { test as base } from "@playwright/test";
import { user } from "../testData/users";
import { PageManager } from "../pages/pageManager";
import { TestOptions } from "../types/testOptionsType";

export const test = base.extend<TestOptions>({
  pageManager: async ({ page }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
  successfulUserLogIn: [async ({ page, pageManager }, use) => {
    await page.goto("/");
    await pageManager.onHomePage().waitForPageToBeLoaded();
    await pageManager.onHomePage().clickOnLogInButtonOnHeader();
    await pageManager.onLogInForm().switchToLoginTab();
    await pageManager.onLogInForm().fillOutEmailAndPasswordFields(user);
    await pageManager.onLogInForm().clickOnLogInButton();
    await pageManager.onHomePage().waitForPageToBeLoaded();
    await use("");
  }, {auto: true}],
});
