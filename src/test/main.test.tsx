import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '@/pages/main';
import store from '@/lib/store/store';
import { Provider } from 'react-redux';

jest.mock('next/router', () => require('next-router-mock'));
describe('Main tests: ', () => {
  test('Main exists', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });

  test('Main renders correctly', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const sections = screen.getAllByTestId('section');
    expect(sections).toHaveLength(4);
  });

  test('Toggle Docs and URL buttons', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const docsButton = screen.getByTestId('docs-button');
    const urlButton = screen.getByTestId('url-button');

    fireEvent.click(docsButton);
    expect(screen.getByTestId('docs-container')).toBeInTheDocument();
    fireEvent.click(urlButton);
    expect(screen.getByText('URL')).toBeInTheDocument();
  });
});
