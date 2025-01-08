import { tasks } from "../script.js";

export function listTasks() {
  if (tasks.length === 0) {
    console.log("Список задач пуст.");
    return;
  }
  tasks.forEach((task) => {
    const statusMessage = task.status
      ? "Задача выполнена"
      : "Задача не выполнена";
    console.log(`Название задачи: "${task.name}", Статус: ${statusMessage}`);
  });
}
