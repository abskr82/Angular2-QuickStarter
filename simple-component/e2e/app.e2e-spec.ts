import { SimpleComponentPage } from './app.po';

describe('simple-component App', function() {
  let page: SimpleComponentPage;

  beforeEach(() => {
    page = new SimpleComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
