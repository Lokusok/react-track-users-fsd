import { render, screen, waitFor } from '@testing-library/react';
import Wrapper from './utils/wrapper';
import CreatePage from '@/pages/create/ui/create-page';
import userEvent from '@testing-library/user-event';

describe('<CreatePage />', () => {
  test('Форма отправляется с корректными данными', async () => {
    render(
      <Wrapper>
        <CreatePage />
      </Wrapper>,
    );

    const inputUsername = screen.getByTestId('create-input-username');
    const textareaDescr = screen.getByTestId('create-textarea-username');
    const submitBtn = screen.getByTestId('create-submit-button');

    await userEvent.type(inputUsername, 'John');
    await userEvent.type(textareaDescr, 'Long description for this user');
    await userEvent.click(submitBtn);

    waitFor(() => {
      // While request
      expect(inputUsername).toBeDisabled();
      expect(textareaDescr).toBeDisabled();
      expect(submitBtn).toBeDisabled();
    });

    waitFor(() => {
      // When request done
      expect(inputUsername).not.toBeDisabled();
      expect(inputUsername).toHaveValue('');

      expect(textareaDescr).not.toBeDisabled();
      expect(textareaDescr).toHaveValue('');

      expect(submitBtn).not.toBeDisabled();
    });
  });

  test('Форма не будет отправляться с пустым именем', async () => {
    render(
      <Wrapper>
        <CreatePage />
      </Wrapper>,
    );

    // const inputUsername = screen.getByTestId('create-input-username');
    const submitBtn = screen.getByTestId('create-submit-button');

    // await userEvent.type(inputUsername, '');

    expect(submitBtn).toBeDisabled();
  });

  test('Форма не будет отправляться с маленьким описанием', async () => {
    render(
      <Wrapper>
        <CreatePage />
      </Wrapper>,
    );

    // const inputUsername = screen.getByTestId('create-input-username');
    const textareaDescr = screen.getByTestId('create-textarea-username');
    const submitBtn = screen.getByTestId('create-submit-button');

    // await userEvent.type(inputUsername, '');
    await userEvent.type(textareaDescr, 'AB');

    expect(submitBtn).toBeDisabled();
  });
});
