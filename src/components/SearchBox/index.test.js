import { cleanup, render, fireEvent } from '@testing-library/react';
import SearchBox from './index';

afterEach(cleanup);

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useSearchParams: () => [{ get: jest.fn() }],
  useNavigate: () => mockedUsedNavigate,
}));

describe('SearchBox', () => {
  it('correctly render', () => {
    const { getByRole, getAllByPlaceholderText } = render(<SearchBox />);

    expect(getAllByPlaceholderText('Nunca dejes de buscar')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  it('go to search results when submit input', () => {
    const { getByPlaceholderText, getByRole } = render(<SearchBox />);

    const input = getByPlaceholderText('Nunca dejes de buscar');
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: 'auto' } });
    expect(input.value).toBe('auto');
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockedUsedNavigate).toBeCalled();
  });
});
