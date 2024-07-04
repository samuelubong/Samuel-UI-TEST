import { Locator, Page } from "@playwright/test";
import { Base } from "./Base";

export class LoginPage extends Base {


private usernameField: Locator
private continueBtn: Locator
private errorMessage: Locator


  constructor(page: Page){
    super(page)
    this.usernameField = page.locator("//input[@type='email']")
    this.continueBtn = page.locator("//button[@type='submit']")
    this.errorMessage = page.locator("(//div[@class='sb-form-message__content']/p/span/span)[1]")
  }

  async enterUsername(username: string) {
    await this.enterText(this.usernameField, username)
  }

  async clickContinueBtn() {
    await this.click(this.continueBtn)
  }

  async getErrorMessage() {
    return await this.errorMessage.innerText()
  }

}