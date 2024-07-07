import { test, expect } from '@playwright/test';
import { BASE_URL } from './config';

const articlesPerPage = 4;

test('Корректный заголовок на главной странице', async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.getByRole('heading').first()).toHaveText(/Главная/i);
});

test('Корректное количество карточек на одной странице', async ({ page }) => {
  await page.goto(BASE_URL);

  const articles = page.locator('article');
  await expect(articles).toHaveCount(articlesPerPage);
});

test('Работает переход по страницам (пагинация)', async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('[data-testid="pagination-link"]')).toHaveCount(2);

  const paginationItems = await page.locator('[data-testid="pagination-link"]').all();
  await paginationItems[1].click();

  await expect(page).toHaveURL(/list\/\d/i);
});

test('Работает переход по страницам (пользователи)', async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page.locator('article')).toHaveCount(articlesPerPage);
  await page.locator('article > a').first().click();

  await expect(page).toHaveURL(/user/i);
});
