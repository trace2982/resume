// @ts-check
const { test, expect } = require('@playwright/test');

const resumeURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

test('Check Name Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('h1')).toBeVisible();
});

test('Check Tagline Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('header h2')).toBeVisible();
});

test('Check Email Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
});

test('Check Phone Number Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href^="tel:"]')).toBeVisible();
});

test('Check Address', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('address')).toBeVisible();
});

test('Check LinkedIn Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href*="linkedin.com"]')).toBeVisible();
});

test('Check GitHub Link', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('a[href*="github.com"]')).toBeVisible();
});

test('Check Objective Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Objective")')).toBeVisible();
});

test('Check Education Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Education")')).toBeVisible();
});

test('Check Experience Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Experience")')).toBeVisible();
});

test('Check Skills Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('section h2:has-text("Skills")')).toBeVisible();
});

test('Check Page Title', async ({ page }) => {
  await page.goto(resumeURL);
  const title = await page.title();
  await expect(title).not.toBe('');
});

test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(resumeURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(resumeURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});

test('Check Footer', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('footer')).toBeVisible();
});
