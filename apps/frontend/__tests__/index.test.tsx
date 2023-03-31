import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: 'Helsinki City Bikes'
    });
    expect(heading).toBeInTheDocument();
  });
});