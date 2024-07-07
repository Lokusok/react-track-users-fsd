import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainPage from '@/pages/main/ui/main-page';
import Wrapper from './utils/wrapper';

describe('<MainPage />', () => {
  test('Корректно запрашивает все данные', async () => {
    render(
      <Wrapper>
        <MainPage />
      </Wrapper>,
    );

    const articlesPerPage = 4;

    expect(await screen.findAllByRole('article')).toHaveLength(articlesPerPage);
  });

  test('Поиск работает правильно', async () => {
    render(
      <Wrapper>
        <MainPage />
      </Wrapper>,
    );

    const searchInput = screen.getByTestId('search-input');

    await userEvent.type(searchInput, 'John');

    waitFor(async () => {
      return expect(await screen.findAllByRole('article')).toHaveLength(2);
    });
  });
});
