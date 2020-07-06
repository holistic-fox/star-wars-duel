import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('home page', () => {
    it('should display navigation menu', () => {
      page.navigateTo();
      expect(page.getNavigation().isDisplayed()).toBeTruthy();
    });

    it('should display fight with characters card', () => {
      page.navigateTo();
      expect(page.getFightWithCharactersCard().isDisplayed()).toBeTruthy();
    });

    it('should display fight with starships card', () => {
      page.navigateTo();
      expect(page.getFightWithStarshipsCard().isDisplayed()).toBeTruthy();
    });

    it('should be possible to navigate to fight with characters mode', () => {
      page.navigateTo();
      page.getFightWithCharactersCard().click();
      expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}characters`);
    });

    it('should be possible to navigate to fight with starships mode', () => {
      page.navigateTo();
      page.getFightWithStarshipsCard().click();
      expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}starships`);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
