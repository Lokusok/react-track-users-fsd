import { render, screen } from '@testing-library/react';
import Button from './button';
import { MemoryRouter } from 'react-router-dom';

describe('<Button />', () => {
  test('Кнопка когда установлен link=false', () => {
    render(<Button link={false} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Ссылка когда установлен link=true', () => {
    render(
      <MemoryRouter>
        <Button link={true} to="/" />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
