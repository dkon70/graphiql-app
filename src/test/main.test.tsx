import ReactDOM from 'react-dom/client';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Main from '@/pages/main';
import store from '@/lib/store/store';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './mockRouter';

document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn(),
    };
  };

  return range;
};

let container: HTMLDivElement | null;

describe('Main tests: ', () => {
  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      if (container) {
        ReactDOM.createRoot(container).render(
          <RouterContext.Provider value={createMockRouter({})}>
            <Provider store={store}>
              <Main />
            </Provider>
          </RouterContext.Provider>
        );
      }
    });
  });

  afterEach(() => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('Main exists', () => {
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });

  test('Main renders correctly', () => {
    const sections = screen.getAllByTestId('section');
    expect(sections).toHaveLength(4);
  });

  test('Toggle Docs and URL buttons', async () => {
    const docsButton = screen.getByTestId('docs-button');
    const urlButton = screen.getByTestId('url-button');

    act(() => {
      fireEvent.click(docsButton);
    });
    expect(await screen.findByText(/docs/i)).toBeInTheDocument();

    act(() => {
      fireEvent.click(urlButton);
    });
    expect(await screen.findByText('URL')).toBeInTheDocument();
  });
});
