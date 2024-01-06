import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import store from '@/lib/store/store';
import '@testing-library/jest-dom';

describe('EndpointEditor', () => {
  test('renders endpoint editor correctly', () => {
    render(
      <Provider store={store}>
        <EndpointEditor />
      </Provider>
    );

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });

  test('saves changes correctly', () => {
    render(
      <Provider store={store}>
        <EndpointEditor />
      </Provider>
    );

    const editButton = screen.getByTestId('button');
    fireEvent.click(editButton);

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'https://test.test' } });

    const saveButton = screen.getByTestId('button');
    fireEvent.click(saveButton);

    expect(store.getState().data.apiUrl).toBe('https://test.test');

    const editedInput = screen.queryByTestId('input');
    expect(editedInput).toBeNull();
  });
});
