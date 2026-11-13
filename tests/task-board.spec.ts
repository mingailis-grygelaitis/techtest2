import { test, expect, Page } from '@playwright/test';
import { TaskBoard } from '../support/task-board';

let page: Page;
let board: TaskBoard;
let release: any;

test.beforeAll(async ({ browser, baseURL }) => {
  if (!baseURL) throw new Error('A baseURL is required');
  page = await browser.newPage();
  board = new TaskBoard(page);
  await page.goto(baseURL);
});

test.afterAll(async () => {
  await page?.close();
});

test('loads release work', async () => {
  release = {
    tasks: [
      { title: 'Review release notes' },
      { title: 'Review release notes with team' },
    ],
    selectedTitle: 'Review release notes',
  };

  await board.addTasks([release.tasks[0]]);
  await expect(page.locator('.todo-list li')).toHaveCount(1);
  await board.addTasks([release.tasks[1]]);
  await expect(page.locator('.todo-list li')).toHaveCount(2);
  expect(await board.visibleTitles()).toContain(release.tasks[0].title);
});

test('completes and clears release work', async () => {
  await expect(page.locator('.todo-list li')).toHaveCount(2);
  const target = page.locator('.todo-list li').filter({ hasText: release.selectedTitle }).first();
  if (await target.isVisible()) {
    await board.completeTask(release.selectedTitle);
  }

  await page.getByRole('link', { name: 'Completed', exact: true }).click();
  const clear = page.getByRole('button', { name: 'Clear completed' });
  if (await clear.isVisible()) {
    await board.clearCompleted();
  } else {
    await expect(page.locator('.todo-list li')).toHaveCount(0);
  }
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
