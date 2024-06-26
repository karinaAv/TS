import { test } from "../fixtures/testOptions";

test("Create one order", async ({ pageManager }) => {
  await pageManager.onHomePage().switchToOrdersTabOnPositionsComponent();
  await pageManager.onHomePage().clickOnNewOrderButton();
  await pageManager.onCreateOrderForm().clickOnPlaceOrderButton();
  await pageManager.onCreateOrderForm().clickOnOkButton();
  await pageManager.onHomePage().verifyOrderIsCreatedAndDisplayedOnOrdersTab();
});
