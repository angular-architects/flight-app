import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Flights (0)').click();

  await page
    .locator('flight-card')
    .first()
    .getByRole('link', { name: 'Edit' })
    .click();

  await page.getByRole('textbox', { name: 'To' }).fill('London');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('textbox', { name: 'To' })).toHaveValue(
    'Londoner',
  );
});

test('visual regression', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Flights (0)').click();

  await expect(page.locator('flight-card').first()).toBeVisible();
  await expect(page.locator('app-flight-search')).toHaveScreenshot(
    'flight-search.png',
  );
});
