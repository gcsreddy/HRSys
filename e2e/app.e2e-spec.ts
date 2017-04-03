import { HRSysPage } from './app.po';

describe('hrsys App', () => {
  let page: HRSysPage;

  beforeEach(() => {
    page = new HRSysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
