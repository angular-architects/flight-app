import { test, expect } from '@playwright/test';

test('should search for Zürich nach Wien', async ({ page }) => {
  await page.goto('')
  await page.getByRole('link', { name: 'Flights' }).first().click()
  await page.getByRole('textbox', { name: 'From' }).fill("Grenchen")
  await page.getByRole('textbox', { name: 'To' }).fill("Zürich")

  // await page.route('https://demo.angulararchitects.io/api/flight**', async (route) => {
  //   await route.fulfill({
  //     status: 200,
  //     json: [
  //       { id: 1, from: 'Grenchen', to: 'Zürich', date: '2026-01-01', delayed: false },
  //       { id: 2, from: 'Grenchen', to: 'Zürich', date: '2026-01-01', delayed: false },
  //       { id: 2, from: 'Grenchen', to: 'Zürich', date: '2026-01-01', delayed: false }
  //     ]
  //   })
  // })

  await page.getByRole('button', { name: 'Search', exact: true }).click()

  await expect(page.getByText('Gefundene Flüge: 2')).toBeVisible()
})