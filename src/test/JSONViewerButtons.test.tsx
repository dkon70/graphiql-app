import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import store from '@/lib/store/store';

describe('JSONViewerButtons component tests', () => {
  test('renders JSONViewerButtons', () => {
    render(
      <Provider store={store}>
        <JSONViewerButtons />
      </Provider>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
