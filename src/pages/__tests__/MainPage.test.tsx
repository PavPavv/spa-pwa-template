/** @jest-environment jsdom */
import React from 'react';
import { screen, render } from '@testing-library/react';

import MainPage from '../MainPage';

describe('render MainPage', () => {
  test('check text', () => {
    render(<MainPage />);
    expect(screen.getByText('Main page')).toBeTruthy();
  });
});
