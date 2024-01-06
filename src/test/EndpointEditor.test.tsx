
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import store from '@/lib/store/store';
import { Provider } from 'react-redux';

describe('Endpoint editor tests: ', () => {
  test('Footer exists', () => {
    render(
      <Provider store={store}>
      <EndpointEditor/>
      </Provider>
  );
    const endpointEditor = screen.getByTestId('endpoint');
    expect(endpointEditor).toBeInTheDocument();
  });

  test('Footer renders correctly', () => {
    render(<Provider store={store}>
      <EndpointEditor/>
      </Provider>);
    const button = screen.getAllByTestId('button');
    expect(button).toBeInTheDocument;
  });
});
