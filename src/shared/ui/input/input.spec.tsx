import { render, screen } from '@testing-library/react';
import Input from './input';

describe('<Input />', () => {
  test('input когда textarea=false', () => {
    render(<Input textarea={false} />);

    expect(screen.getByRole('textbox').tagName.toLowerCase()).toBe('input');
  });

  test('textarea когда textarea=true', () => {
    render(<Input textarea={true} />);

    expect(screen.getByRole('textbox').tagName.toLowerCase()).toBe('textarea');
  });
});
