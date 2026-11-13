export class TaskBoard {
  constructor(public page: any) {}

  async addTasks(tasks: any): Promise<void> {
    tasks.forEach(async (task: any) => {
      await this.page.getByPlaceholder('What needs to be done?').fill(task.title);
      await this.page.getByPlaceholder('What needs to be done?').press('Enter');
    });
  }

  async visibleTitles(): Promise<string[]> {
    return this.page.locator('.todo-list li label').allTextContents();
  }

  async completeTask(title: any) {
    await this.page.locator('.todo-list li').filter({ hasText: title }).first()
      .getByRole('checkbox').check({ force: true });
  }

  async clearCompleted() {
    try {
      await this.page.getByRole('button', { name: 'Clear completed' }).click();
    } catch {
      return;
    }
  }
}
