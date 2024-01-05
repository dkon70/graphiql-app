import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import '@testing-library/jest-dom';

const ErrorThrowingComponent = ({ error }: { error: Error }) => {
  throw error;
};

describe('ErrorBoundary', () => {
  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('renders error message and reload button on error', () => {
    const error = new Error('Test error');

    render(
      <ErrorBoundary>
        <ErrorThrowingComponent error={error} />
      </ErrorBoundary>
    );

    expect(
      screen.getByText('Oops... something went wrong...')
    ).toBeInTheDocument();
    expect(screen.getByText('Reload app')).toBeInTheDocument();
  });
});
