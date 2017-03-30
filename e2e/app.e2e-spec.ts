import { WatchtowerPage } from './app.po';

describe('watchtower App', () => {
  let page: WatchtowerPage;

  beforeEach(() => {
    page = new WatchtowerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
