import { ICreateAttachment, ICreateLog } from '@cucumber/cucumber/lib/runtime/attachment_manager';
import {type Locator, type Page, expect} from '@playwright/test'

export class Base {
  readonly page: Page
  

  constructor(page: Page) {
    this.page = page;
  }

  async enterText(element: Locator, text: string) {
    await element.fill(text)
  }

  async click(element: Locator) {
    await element.click()
  }
  validateText(text: string, element: Locator) {
    expect(element).toHaveText(text)
  }
}