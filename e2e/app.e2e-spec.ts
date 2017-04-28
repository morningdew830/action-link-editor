import { NgAppPage } from './app.po';

describe('ng-app App', () => {
  let page: NgAppPage;

  beforeEach(() => {
    page = new NgAppPage();
  });

  it('should display message saying "410"', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('410');
  });
});
