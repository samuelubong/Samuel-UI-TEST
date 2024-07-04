import { ICreateAttachment } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { Base } from "./Base";
import { type Locator, type Page } from "@playwright/test";

export class HeadlinePage extends Base {

  readonly searchField: Locator;
  readonly searchBtn: Locator;
  readonly signInLink: Locator
  readonly textHeading: Array <String> = []

  constructor(page: Page) {
    super(page)
    this.searchField = page.locator("//input[@placeholder='Search the BBC']")
    this.searchBtn = page.locator("//button[@id='searchButton']")
    this.signInLink = page.locator("//span[text()='Sign in']")
  }

  async inputSearchField(text: string) {
    await this.enterText(this.searchField, text)
  }
  async clickSearchBtn() {
    await this.click(this.searchBtn)
  }
   getSearchField() {
    return this.searchField
  }
  getSignInLink() {
    return this.signInLink
  }
  async getArticlesHeading() {
    return await this.page.locator("//span[@role='text']/p").all()
  }
}