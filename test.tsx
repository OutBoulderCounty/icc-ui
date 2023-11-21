import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './src/pages/404';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';

describe('NotFoundPage Component', () => {
  it('renders without crashing', () => {
    render(<NotFoundPage />);
  });

  it('renders the correct content', () => {
    render(<NotFoundPage />);

    expect(screen.getByText('404: Not Found')).toBeInTheDocument();
    expect(
      screen.getByText("You just hit a route that doesn't exist... the sadness.")
    ).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<NotFoundPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});