import { test, expect } from '@playwright/test';
import { BASE_URL } from './config';
import { users } from '@/app/mocks/db';

const USER_PAGE_URL = `${BASE_URL}/user/${users[0].id}`;

test('Работает переключение между режимами просмотра и изменения', async ({ page }) => {
  await page.goto(USER_PAGE_URL);

  await expect(page.getByRole('heading').first()).toContainText(/просмотр/i);

  const toUpdateModeButton = page.getByTestId('go-edit-button');

  await toUpdateModeButton.click();

  await expect(page.getByRole('heading').first()).toContainText(/редактирование/i);
});

test('Изменение пользователя работает корректно', async ({ page }) => {
  await page.goto(USER_PAGE_URL);

  await expect(page.getByRole('heading').first()).toContainText(/просмотр/i);

  const toUpdateModeButton = page.getByTestId('go-edit-button');

  await toUpdateModeButton.click();

  await expect(page.getByRole('heading').first()).toContainText(/редактирование/i);

  const inputUsername = page.getByTestId('update-input-username');
  const textareaDescr = page.getByTestId('update-textarea-username');
  const submitBtn = page.getByTestId('update-submit-button');

  await inputUsername.fill('John Doe 123');
  await textareaDescr.fill('This is description for John Doe 123');
  await submitBtn.click();

  await expect(page.getByRole('heading').first()).toContainText(/John Doe 123/i);
});

test('Удаление пользователя работает корректно', async ({ page }) => {
  await page.goto(USER_PAGE_URL);

  await expect(page.getByRole('heading').first()).toContainText(/просмотр/i);

  const toDeleteButton = page.getByTestId('go-delete-button');

  await toDeleteButton.click();

  await expect(page).toHaveURL(/\//i);
});
