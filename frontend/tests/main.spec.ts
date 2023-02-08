import { test } from "@playwright/test";

import config from "./test.config";

test("Test page overall", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Zaloguj się" }).click();
  await page.getByRole("button", { name: "Sign in with USOS" }).click();
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill(config.TEST_USOS_LOGIN);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(config.TEST_USOS_PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("heading", { name: "Ostatnie posiedzenia" }).click();
  await page.getByRole("heading", { name: "Ostatnie uchwały" }).click();
  await page.getByRole("link", { name: "Posiedzenia" }).click();
  await page.getByRole("heading", { name: "Posiedzenia parlamentu" }).click();
  await page
    .locator("div")
    .filter({ hasText: "Sala Centrum_Kongresowego" })
    .first()
    .click();
  await page
    .getByRole("heading", { name: "Sprawozdania z posiedzenia" })
    .click();
  await page.getByRole("heading", { name: "Uchwały" }).click();
  await page.getByRole("link", { name: "Uchwały" }).click();
  await page.getByRole("heading", { name: "Uchwały" }).click();
  await page.getByRole("link", { name: "Struktura organizacyjna" }).click();
  await page.getByRole("heading", { name: "Struktura organizacyjna" }).click();
  await page.getByRole("button", { name: "Menu użytkownika" }).click();
  await page.getByRole("menuitem", { name: "Wyloguj się" }).click();
});
