import { expect, test } from '@playwright/test';

test('strategy index page', async ({ page }) => {
	await page.goto('/strategies');
	const heading = page.getByRole('heading', { name: 'Quickswap momentum' });
	await expect(heading).toBeVisible();
});
