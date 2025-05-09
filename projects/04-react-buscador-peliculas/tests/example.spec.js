import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://www.omdbapi.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows image movies', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const year = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await year.textContent()
  const imageSrc = await image.getAttribute('img src')
 
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toBe(`${CAT_PREFIX_IMAGE_URL}/?apikey=4287ad07&s=avengers`)
  await expect(image).toBeVisible()

  
})