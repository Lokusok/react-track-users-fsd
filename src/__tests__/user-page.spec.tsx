import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

import { users } from '@/app/mocks/db';
import store from '@/app/store';

import { UserPage } from '@/pages/user';
import userEvent from '@testing-library/user-event';

// Not worked as in react-router v5. Only for user page we have this approach
function CorrectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      <MemoryRouter initialEntries={[`/user/${users[0].id}`]}>
        <Routes>
          <Route path="user/:id" element={children} />
        </Routes>
      </MemoryRouter>
    </StoreProvider>
  );
}

describe('<UserPage />', () => {
  test('Отображает корректного пользователя', async () => {
    render(
      <CorrectWrapper>
        <UserPage />
      </CorrectWrapper>,
    );

    waitFor(() => {
      return expect(screen.getByText(new RegExp(users[0].name, 'i'))).toBeInTheDocument();
    });
  });

  test('Переключение на редактирование работает', async () => {
    render(
      <CorrectWrapper>
        <UserPage />
      </CorrectWrapper>,
    );

    expect(await screen.findByText(new RegExp(users[0].name, 'i'))).toBeInTheDocument();

    const goEditButton = screen.getByTestId('go-edit-button');

    await userEvent.click(goEditButton);

    const editForm = await screen.findByTestId('edit-user-form');
    expect(editForm).toBeInTheDocument();
  });

  test('Редактирование пользователя работает', async () => {
    render(
      <CorrectWrapper>
        <UserPage />
      </CorrectWrapper>,
    );
    const user = users[0];

    expect(await screen.findByText(new RegExp(user.name, 'i'))).toBeInTheDocument();

    const goEditButton = screen.getByTestId('go-edit-button');

    await userEvent.click(goEditButton);

    const editForm = await screen.findByTestId('edit-user-form');
    expect(editForm).toBeInTheDocument();

    const inputUsername = screen.getByTestId('update-input-username');
    const textareaDescr = screen.getByTestId('update-textarea-username');
    const submitBtn = screen.getByTestId('update-submit-button');

    await userEvent.type(inputUsername, '-upd');
    await userEvent.type(textareaDescr, '-upd');
    await userEvent.click(submitBtn);

    await waitForElementToBeRemoved(editForm);

    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(new RegExp(`просмотр пользователя ${user.name}-upd`, 'i'));
  });
});
