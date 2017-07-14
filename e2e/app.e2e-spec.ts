import { Auth0AngularPage } from './app.po';

describe('auth0-angular App', () => {
  let page: Auth0AngularPage;

  beforeEach(() => {
    page = new Auth0AngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
