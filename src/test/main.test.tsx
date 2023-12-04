import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Main page tests: ', () => {
  test('Main route exists', () => {
    render(<Home />);
  });
  expect(global.location.pathname).toBe('/');
});
