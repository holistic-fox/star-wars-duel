import { browser, by, element } from 'protractor';
import { WebElementPromise } from 'selenium-webdriver';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getNavigation(): WebElementPromise {
    return element(by.css('[e2e="star-wars-duel-navigation"]')).getWebElement() as WebElementPromise;
  }

  getFightWithCharactersCard(): WebElementPromise {
    return element(by.css('[e2e="fight-with-characters"]')).getWebElement() as WebElementPromise;
  }

  getFightWithStarshipsCard(): WebElementPromise {
    return element(by.css('[e2e="fight-with-starships"]')).getWebElement() as WebElementPromise;
  }
}
