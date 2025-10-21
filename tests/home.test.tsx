import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders hero title', () => {
    render(<HomePage /> as any);
    expect(screen.getByText(/Цифровой флюид/)).toBeTruthy();
  });
});












