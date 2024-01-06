import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import store from '@/lib/store/store';
import { Provider } from 'react-redux';

describe('Endpoint editor tests: ', () => {
  test('Endpoint editor exists', () => {
    render(
      <Provider store={store}>
        <EndpointEditor />
      </Provider>
    );
    const endpointEditor = screen.getByTestId('endpoint');
    expect(endpointEditor).toBeInTheDocument();
  });

  test('Endpoint editor renders correctly', () => {
    render(
      <Provider store={store}>
        <EndpointEditor />
      </Provider>
    );
    const button = screen.getAllByTestId('button');
    expect(button).toBeInTheDocument;
  });

  test('displays current URL after editing is finished', () => {
    render(
      <Provider store={store}>
        <EndpointEditor />
      </Provider>
    );

    const editButton = screen.getByTestId('button');
    fireEvent.click(editButton);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'https://test.test' } });
    fireEvent.click(screen.getByTestId('button'));
    const displayedUrl = screen.getByText('https://test.test');
    expect(displayedUrl).toBeInTheDocument();
  });
});
