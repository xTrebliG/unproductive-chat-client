import { UnproductiveChatClientPage } from './app.po';

describe('unproductive-chat-client App', () => {
  let page: UnproductiveChatClientPage;

  beforeEach(() => {
    page = new UnproductiveChatClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
