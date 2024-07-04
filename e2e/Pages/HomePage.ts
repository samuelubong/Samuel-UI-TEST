import { type Locator, type Page, expect } from "@playwright/test";
import { Base } from "./Base";

export class HomePage extends Base {
  readonly todayElement: Locator;
  readonly headlineLink: Locator;
  private teamNames: Array<string> = []
  private signInLink: Locator

 
 

  constructor(page: Page) {
    super(page);
    this.todayElement = page.locator('[data-content="Today"]');
    this.headlineLink = page.locator("//span[text()='Search BBC']")
    this.signInLink = page.locator("(//ul)[2]/li/a") 
  }

  async navigateToURL(url: string) {
    await this.page.goto(url);
  }

  async validateTitle(text: string) {
    expect(await this.page.title()).toBe(text);
  }

  async validateTodayElement(text: string) {
    await this.validateText(text, this.todayElement);
  }
  async todaysMatchesGroup1() {
    for(const item of await this.page.locator('(//div[@id="main-data"]/*/div[1]/*)/*/div[2]/div/div/a/*/*/*/*/*/span[2]').all()) {
      this.teamNames.push(await item.innerText())
    }  
  }

  async todaysMatchesGroup2() {
    for(const item of await this.page.locator('(//div[@id="main-data"]/*/div[1]/*)/*/div[2]/div/div/div/*/*/*/*/span[2]').all()) {
      this.teamNames.push(await item.innerText())
    }  
    return this.teamNames
  }

  async clickSearchLink() {
    await this.click(this.headlineLink)
  }
  async getSearchLink() {
    return this.headlineLink
  }
  async clickSigninLink() {
    await this.page.waitForSelector("(//ul)[2]/li/a")
    this.click(this.signInLink)
  } 

}

