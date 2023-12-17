import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Editor from '@/components/Editor/Editor';
import '@testing-library/jest-dom';

describe('Editor component tests', () => {
  test('renders line numbers based on textarea content', () => {
    render(<Editor />);
    expect(screen.getByText('1')).toBeInTheDocument();
    const textarea = screen.getByTestId('textarea');
    fireEvent.change(textarea, { target: { value: 'Line 1\nLine 2\nLine 3' } });
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('scrolling textarea updates line numbers scroll', () => {
    render(<Editor />);
    const textarea = screen.getByTestId('textarea');
    fireEvent.scroll(textarea, { target: { scrollTop: 100 } });
    const lineNumbers = screen.getByTestId('lineNumbers');
    expect(lineNumbers.scrollTop).toBe(100);
  });

  test('handles tabs correctly', () => {
    render(<Editor />);
    const textarea: HTMLTextAreaElement = screen.getByTestId('textarea');
    fireEvent.change(textarea, { target: { value: 'Hello, World!' } });
    fireEvent.keyDown(textarea, { key: 'Tab', keyCode: 9, which: 9 });
    expect(textarea.value).toBe('Hello, World!\t');
  });
});
