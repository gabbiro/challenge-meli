import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('correctly render', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hola mundo')).toBeTruthy();
  });
});
