import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio headline', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /design que organiza o complexo/i })).toBeInTheDocument();
});
