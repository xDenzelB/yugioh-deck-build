import { render, screen } from '@testing-library/react';
// import App from './App';
import Search from './SearchPage';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders a title on the search page', async () => {
  render(<Router history={location}><Search /></Router>);
  const linkElement = await screen.findByText(/Make a Deck!/i);
  expect(linkElement).toBeInTheDocument();
});
