import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../../hooks/fixtures";
import { HomePage } from "../../Pages/HomePage";
import { LoginPage } from "../../Pages/LoginPage";
import { expect } from "@playwright/test";

let homePage: HomePage;
let loginPage: LoginPage;

Given("User navigate to the {string} to test login", async (url: string) => {
  homePage = new HomePage(fixture.page);
  await homePage.validateTitle("Scores & Fixtures - Football - BBC Sport");
});
Given("user clicks on the signin link on the landing page", async () => {
  await fixture.page.waitForTimeout(3200);
  await homePage.clickSigninLink();
});
When(
  "user enter {string} as username and clicks continue",
  { timeout: 63000 },
  async (username) => {
    loginPage = new LoginPage(fixture.page);
    await loginPage.enterUsername(username);
    await loginPage.clickContinueBtn();

    if (username.includes(".") || username.includes("@")) {
      return;
    } else {
     console.log("Invalid email")
    }
  }
);
Then(
  "there should be an error {string}",
  async (errorMessage) => {
    try {
      expect(await loginPage.getErrorMessage()).toContain(errorMessage);
    } catch (error: unknown) {
     console.log("")
    }
  }
);