import { test, expect } from '@playwright/test';
import { BASE_URL } from './config';

const CREATE_PAGE_URL = `${BASE_URL}/create`;

test('Изначально пустые значения и не активная кнопка', async ({ page }) => {
  await page.goto(CREATE_PAGE_URL);

  const usernameInput = page.getByTestId('create-input-username');
  const textareaInput = page.getByTestId('create-textarea-descr');
  const submitBtn = page.getByTestId('create-submit-button');

  await expect(usernameInput).toHaveValue('');
  await expect(textareaInput).toHaveValue('');
  await expect(submitBtn).toBeDisabled();
});

test('Форму можно отправить', async ({ page }) => {
  await page.goto(CREATE_PAGE_URL);

  const usernameInput = page.getByTestId('create-input-username');
  const textareaInput = page.getByTestId('create-textarea-descr');
  const submitBtn = page.getByTestId('create-submit-button');

  await usernameInput.fill('John');
  await textareaInput.fill('Long description for this user');

  await expect(submitBtn).not.toBeDisabled();

  await submitBtn.click();

  await expect(usernameInput).toHaveValue('');
  await expect(textareaInput).toHaveValue('');
  await expect(submitBtn).toBeDisabled();
});
