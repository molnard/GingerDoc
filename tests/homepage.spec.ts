import { expect, test } from '@playwright/test'

test('the homepage search returns focus to its own trigger', async ({ page }) => {
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Search the manual', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Search' })
  const input = dialog.getByRole('textbox', { name: 'Search', exact: true })
  await expect(input).toBeFocused()
  await expect(dialog.getByRole('combobox', { name: 'Search in' })).toHaveValue('everyday')
  await input.fill('backup')
  await expect(dialog.locator('.pagefind-ui__message')).toContainText('results for backup')
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()
})

test('homepage and article headers keep community links accessible at narrow widths', async ({ page }) => {
  for (const width of [320, 390, 800, 1024, 1200, 1488]) {
    await page.setViewportSize({ width, height: 1058 })
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Ginger Wallet website', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Telegram', exact: true })).toHaveAttribute('href', 'https://t.me/GingerWallet')
    await expect(page.getByRole('link', { name: 'Telegram', exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeInViewport()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width)

    await page.goto('/getting-started/')
    if (width < 800) await page.getByRole('button', { name: 'Menu', exact: true }).click()
    await expect(page.getByRole('link', { name: 'Ginger Wallet website', exact: true }).filter({ visible: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Telegram', exact: true }).filter({ visible: true })).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width)
  }
})
