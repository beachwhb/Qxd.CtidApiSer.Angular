import { CtidApiSerTemplatePage } from './app.po';

describe('CtidApiSer App', function() {
  let page: CtidApiSerTemplatePage;

  beforeEach(() => {
    page = new CtidApiSerTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
