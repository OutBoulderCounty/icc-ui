import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './src/pages/404'; // Adjust the path based on your project structure

test('renders the NotFoundPage with the correct title', () => {
  render(<NotFoundPage />);
  
});