import { render, screen } from '@testing-library/react';
import Search from './SearchPage';

test('Make a Deck!', async () => {
  render(<Search />);
  const linkElement = await screen.findByText(/Make a Deck!/i);
  expect(linkElement).toBeInTheDocument();
});
