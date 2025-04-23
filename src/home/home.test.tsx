import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderExample from './home';

describe('HeaderExample', () => {
  test('Renders Home component', () => {
    render(<HeaderExample />);
    const headerTitle = screen.getByText('Hello Title');
    expect(headerTitle).toBeInTheDocument();
  });
});
