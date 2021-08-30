import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project for link', () => {
  render(<App />);
  const linkElement = screen.getByText(/project for/i);
  expect(linkElement).toBeInTheDocument();
});
