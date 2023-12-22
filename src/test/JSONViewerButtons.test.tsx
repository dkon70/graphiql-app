import React from 'react';
import { render, screen } from '@testing-library/react';
import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import '@testing-library/jest-dom';

describe('JSONViewerButtons component tests', () => {
  test('renders JSONViewerButtons', () => {
    render(<JSONViewerButtons />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
