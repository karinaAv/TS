import { test } from "../fixtures/testOptions";

test("Create one open position", async ({ pageManager }) => {
  await pageManager.onHomePage().clickOnNewOrderButton();
  await pageManager.onCreateOrderForm().clickOnPlaceOrderButton();
  await pageManager.onCreateOrderForm().clickOnOkButton();
  await pageManager
    .onHomePage()
    .verifyPositionIsCreatedAndDisplayedOnPositionsTab();
});
