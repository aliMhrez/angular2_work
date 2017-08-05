import { TodoAppDemo4Page } from './app.po';

describe('todo-app-demo4 App', () => {
  let page: TodoAppDemo4Page;

  beforeEach(() => {
    page = new TodoAppDemo4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
